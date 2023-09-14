/**
 * 创建一个名为IndexedDBHelper的库
 * @type {{
 * addItem: (function(*, *): Promise<unknown>),
 * createTable: (function(*, null=, null=): Promise<unknown>),
 * getAllItem: (function(*): Promise<unknown>),
 * getItemById: (function(*, *): Promise<unknown>),
 * openDB: (function(): Promise<unknown>)}}
 */
export let IndexedDBHelper = (function () {
    // 定义数据库名称和版本
    let db;
    let dbName = "project";
    let dbVersion = 1;

    /**
     * 打开IndexedDB数据库
     * @returns {Promise<unknown>}
     */
    function openDB() {
        return new Promise(function (resolve, reject) {
            let request = indexedDB.open(dbName, dbVersion);

            request.onerror = function (event) {
                reject("无法打开数据库");
            };

            request.onsuccess = function (event) {
                db = event.target.result;
                resolve("数据库已打开");
            };

            request.onupgradeneeded = function (event) {
                db = event.target.result;
                resolve("对象存储空间已创建")
            };
        });
    }

    /**
     * 创建对象存储空间
     * @param object table name
     * @param index index name
     * @param indexUnique Is the index unique?
     * @returns {Promise<unknown>}
     */
    function createTable(object, index = null, indexUnique = null) {
        return new Promise(function (resolve, reject) {
            if (!db.objectStoreNames.contains(object)) {
                // 在此处创建或升级对象存储空间
                // keyPath=主键, autoIncrement=是否自增
                let objectStore = db.createObjectStore(object, {
                    keyPath: "id",
                    autoIncrement: true
                });
                if (index) {
                    objectStore.createIndex(index, index, {
                        unique: indexUnique
                    });
                }

                objectStore.onerror = function (event) {
                    reject("创建失败");
                };

                objectStore.onsuccess = function (event) {
                    db = event.target.result;
                    resolve("创建成功");
                };
            } else {
                reject("数据表已存在")
            }
        })
    }

    /**
     * 添加数据到对象存储空间，
     * @param object object name
     * @param item object content
     * @returns {Promise<unknown>}
     */
    function addItem(object, item) {
        return new Promise(function (resolve, reject) {
            let transaction = db.transaction([object], "readwrite");
            let objectStore = transaction.objectStore(object);
            let request = objectStore.add(item);

            request.onsuccess = function (event) {
                console.log(event)
                resolve("数据已添加");
            };

            request.onerror = function (event) {
                console.log(event)
                reject("无法添加数据");
            };
        });
    }

    /**
     * 从对象存储空间获取数据
     * @param object object name
     * @param id data id
     * @returns {Promise<unknown>}
     */
    function getItemById(object, id) {
        return new Promise(function (resolve, reject) {
            let transaction = db.transaction([object], "readonly");
            let objectStore = transaction.objectStore(object);
            let request = objectStore.get(id);

            request.onsuccess = function (event) {
                let item = event.target.result;
                if (item) {
                    resolve(item);
                } else {
                    reject("未找到数据");
                }
            };

            request.onerror = function (event) {
                reject("无法获取数据");
            };
        });
    }

    /**
     * 从对象存储空间获取所有数据
     * @param object object name
     * @returns {Promise<unknown>}
     */
    function getAllItem(object) {
        return new Promise(function (resolve, reject) {
            let transaction = db.transaction([object], "readonly");
            let objectStore = transaction.objectStore(object);
            let request = objectStore.getAll()

            request.onsuccess = function (event) {
                let item = event.target.result;
                if (item) {
                    resolve(item)
                } else {
                    reject("暂无数据")
                }
            }

            request.onerror = (event) => {
                reject("无法获取数据");
            }
        })
    }

    /**
     * 导出公共接口
     */
    return {
        openDB: openDB,
        addItem: addItem,
        getItemById: getItemById,
        getAllItem: getAllItem,
        createTable: createTable
    };
})();

// 使用示例：
// IndexedDBHelper.openDB().then(function (message) {
//     console.log(message);
//
//     let newItem = { id: 1, name: "示例项" };
//     IndexedDBHelper.addItem(newItem).then(function (message) {
//         console.log(message);
//
//         IndexedDBHelper.getItemById(1).then(function (item) {
//             console.log("获取的项：", item);
//         }).catch(function (error) {
//             console.error(error);
//         });
//     }).catch(function (error) {
//         console.error(error);
//     });
// }).catch(function (error) {
//     console.error(error);
// });
