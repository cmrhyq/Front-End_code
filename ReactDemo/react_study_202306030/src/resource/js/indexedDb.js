/**
 * 创建一个名为IndexedDBHelper的库
 * @type {{
 * closeDB: closeDB,
 * addItem: (function(*, *): Promise<unknown>),
 * createTable: (function(*, null=, null=): Promise<unknown>),
 * deleteObject: ((function(*): (*|undefined))|*),
 * getAllItem: (function(*): Promise<unknown>),
 * deleteItemById: (function(*, *): Promise<unknown>),
 * getItemById: (function(*, *): Promise<unknown>),
 * openDB: (function(*, null=, null=): Promise<unknown>)
 * }}
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
    function openDB(tableName, index = null, indexUnique = null) {
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
                // 在此处创建或升级对象存储空间
                // keyPath=主键, autoIncrement=是否自增
                let objectStore = db.createObjectStore(tableName, {
                    keyPath: "id",
                    autoIncrement: true
                });
                if (index) {
                    objectStore.createIndex(index, index, {
                        unique: indexUnique
                    });
                }

                objectStore.onerror = function (event) {
                    reject("对象存储空间创建失败");
                };

                objectStore.onsuccess = function (event) {
                    db = event.target.result;
                    resolve("对象存储空间已创建")
                };
            };
        });
    }

    /**
     * 创建对象存储空间
     * @param tableName table name
     * @param index index name
     * @param indexUnique Is the index unique?
     * @returns {Promise<unknown>}
     */
    function createTable(tableName, index = null, indexUnique = null) {
        return new Promise(function (resolve, reject) {
            if (!db.objectStoreNames.contains(tableName)) {
                // 在此处创建或升级对象存储空间
                // keyPath=主键, autoIncrement=是否自增
                let objectStore = db.createObjectStore(tableName, {
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
     * @param tableName table name
     * @param data data content
     * @returns {Promise<unknown>}
     */
    function addData(tableName, data) {
        return new Promise(function (resolve, reject) {
            let transaction = db.transaction([tableName], "readwrite");
            let objectStore = transaction.objectStore(tableName);
            let request = objectStore.add(data);

            request.onsuccess = function (event) {
                resolve("数据已添加");
            };

            request.onerror = function (event) {
                reject("无法添加数据");
            };
        });
    }

    /**
     * 根据id更新数据
     * @param tableName table name
     * @param id id
     * @param newData new data
     */
    function updateData(tableName, id, newData) {
        return new Promise(function (resolve, reject) {
            let transaction = db.transaction([tableName], 'readwrite');
            let objectStore = transaction.objectStore(tableName);

            

        })
    }

    /**
     * 根据id删除数据
     * @param tableName
     * @param id
     * @returns {Promise<unknown>}
     */
    function deleteDataById(tableName, id) {
        return new Promise(function (resolve, reject) {
            let transaction = db.transaction([tableName], 'readwrite');
            let objectStore = transaction.objectStore(tableName);
            let request = objectStore.openCursor();

            request.onsuccess = function (event) {
                let cursor = event.target.result;
                if (cursor) {
                    // 因为 cursor.key 的值是数字类型的，而 id 的值是字符类型的
                    // 所以不能用三个等号的严格相等，得用两个等号的宽松相等
                    // 具体参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness
                    if (cursor.key == id) {
                        cursor.delete()
                        resolve("删除成功")
                    }
                    cursor.continue();
                } else {
                    reject("没有更多数据")
                }
            }
        })
    }

    /**
     * 删除对象存储空间
     * @param tableName 对象存储空间名
     */
    function deleteTable(tableName) {
        if (tableName) {
            if (db.objectStoreNames.contains(tableName)) {
                return db.deleteObjectStore(tableName)
            } else {
                console.log("数据表不存在")
            }
        } else {
            console.log("数据表名为空")
        }
    }

    /**
     * 从对象存储空间获取数据
     * @param tableName table name
     * @param id data id
     * @returns {Promise<unknown>}
     */
    function getDataById(tableName, id) {
        return new Promise(function (resolve, reject) {
            let transaction = db.transaction([tableName], "readonly");
            let objectStore = transaction.objectStore(tableName);
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
     * @param tableName table name
     * @returns {Promise<unknown>}
     */
    function getAllData(tableName) {
        return new Promise(function (resolve, reject) {
            let transaction = db.transaction([tableName], "readonly");
            let objectStore = transaction.objectStore(tableName);
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
     * @CreatedTime：2019/06/20 17:58:27
     * @params：{db:indexedDB对象}
     * @Description：关闭数据库
     */
    function closeDB() {
        db.close();
    }

    /**
     * 导出公共接口
     */
    return {
        openDB: openDB,
        addItem: addData,
        deleteItemById: deleteDataById,
        deleteObject: deleteTable,
        updateData: updateData,
        getItemById: getDataById,
        getAllItem: getAllData,
        createTable: createTable,
        closeDB: closeDB
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
