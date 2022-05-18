var __extends = this && this.__extends || function() {
    var extendStatics = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(d, b) {
        d.__proto__ = b
    } || function(d, b) {
        for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p])
    };
    return function(d, b) {
        function __() {
            this.constructor = d
        }
        extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __)
    }
}(),
com;
! function(com) {
! function(battleline) {
    var EnumValue = function() {
        function EnumValue(enumType, enumName, ordinal, identifier) {
            if (null === enumType.values) throw new Error("Enum Type is missing values[] array!");
            if (enumType.values[ordinal]) throw new Error("There is already an enum value with ordinal " + ordinal + "!");
            enumType.values[ordinal] = this, this._enumName = enumName, this._ordinal = ordinal, this._identifier = identifier
        }
        return Object.defineProperty(EnumValue.prototype, "ordinal", {
            get: function() {
                return this._ordinal
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(EnumValue.prototype, "identifier", {
            get: function() {
                return this._identifier
            },
            enumerable: !0,
            configurable: !0
        }), EnumValue.prototype.toString = function() {
            return "[" + this._enumName + "." + this._identifier + "]"
        }, EnumValue
    }();
    battleline.EnumValue = EnumValue
}(com.battleline || (com.battleline = {}))
}(com || (com = {}));
var com;
! function(com) {
! function(battleline) {
    ! function(DeviceType) {
        DeviceType.values = new Array;
        var Value = function(_super) {
            function Value(ordinal, identifier) {
                return _super.call(this, DeviceType, "Device", ordinal, identifier) || this
            }
            return __extends(Value, _super), Value
        }(battleline.EnumValue);
        DeviceType.Other = new Value(0, "Other"), DeviceType.Computer = new Value(1, "Computer"), DeviceType.Tablet = new Value(2, "Tablet"), DeviceType.Handheld = new Value(3, "Handheld")
    }(battleline.DeviceType || (battleline.DeviceType = {}))
}(com.battleline || (com.battleline = {}))
}(com || (com = {}));
var com;
! function(com) {
! function(battleline) {
    ! function(OS) {
        OS.values = new Array;
        var Value = function(_super) {
            function Value(ordinal, identifier) {
                return _super.call(this, OS, "OS", ordinal, identifier) || this
            }
            return __extends(Value, _super), Value
        }(battleline.EnumValue);
        OS.Other = new Value(0, "Other"), OS.Windows = new Value(1, "Windows"), OS.Mac = new Value(2, "Mac"), OS.ChromeOS = new Value(3, "ChromeOS"), OS.iOS = new Value(4, "iOS"), OS.Android = new Value(5, "Android")
    }(battleline.OS || (battleline.OS = {}))
}(com.battleline || (com.battleline = {}))
}(com || (com = {}));
var com;
! function(com) {
! function(battleline) {
    ! function(Browser) {
        Browser.values = new Array;
        var Value = function(_super) {
            function Value(ordinal, identifier) {
                return _super.call(this, Browser, "Browser", ordinal, identifier) || this
            }
            return __extends(Value, _super), Value
        }(battleline.EnumValue);
        Browser.Other = new Value(0, "Other"), Browser.Chrome = new Value(1, "Chrome"), Browser.Firefox = new Value(2, "Firefox"), Browser.Safari = new Value(3, "Safari"), Browser.Edge = new Value(4, "Edge"), Browser.IE = new Value(5, "IE"), Browser.Opera = new Value(6, "Opera"), Browser.Vivaldi = new Value(7, "Vivaldi")
    }(battleline.Browser || (battleline.Browser = {}))
}(com.battleline || (com.battleline = {}))
}(com || (com = {}));
var com;
! function(com) {
! function(battleline) {
    var Version = function() {
        function Version() {
            this._major = 0, this._minor = 0, this._build = 0, this._revision = 0, this._str = "0.0.0.0", this._name = ""
        }
        return Object.defineProperty(Version.prototype, "major", {
            get: function() {
                return this._major
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Version.prototype, "minor", {
            get: function() {
                return this._minor
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Version.prototype, "build", {
            get: function() {
                return this._build
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Version.prototype, "revision", {
            get: function() {
                return this._revision
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Version.prototype, "str", {
            get: function() {
                return this._str
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Version.prototype, "name", {
            get: function() {
                return this._name
            },
            set: function(v) {
                this._name = v
            },
            enumerable: !0,
            configurable: !0
        }), Version.prototype.fromName = function(name) {
            this._str = "0.0.0.0", this._major = this._minor = this._build = this._revision = 0, this._name = name
        }, Version.prototype.fromVersionString = function(str, name) {
            void 0 === name && (name = ""), this._str = str, this._name = name;
            var parts = str.split(".");
            this._major = parts.length > 0 ? parseInt(parts[0]) : 0, this._minor = parts.length > 1 ? parseInt(parts[1]) : 0, this._build = parts.length > 2 ? parseInt(parts[2]) : 0, this._revision = parts.length > 3 ? parseInt(parts[3]) : 0
        }, Version.fromVersionString = function(str, name) {
            void 0 === name && (name = "");
            var v = new Version;
            return v.fromVersionString(str, name), v
        }, Version.compare = function(a, b) {
            return a._major < b._major ? -1 : a._major > b._major ? 1 : a._minor < b._minor ? -1 : a._minor > b._minor ? 1 : a._build < b._build ? -1 : a._build > b._build ? 1 : a._revision < b._revision ? -1 : a._revision > b._revision ? 1 : 0
        }, Version.prototype.fromVersionNumbers = function(major, minor, build, revision, name) {
            void 0 === minor && (minor = void 0), void 0 === build && (build = void 0), void 0 === revision && (revision = void 0), void 0 === name && (name = ""), this._major = major || 0, this._minor = minor || 0, this._build = build || 0, this._revision = revision || 0, this._name = name, this._str = "", void 0 !== major && (this._str += major), void 0 !== minor && (this._str += "." + minor), void 0 !== build && (this._str += "." + build), void 0 !== revision && (this._str += "." + revision)
        }, Version.prototype.toString = function() {
            var str = "";
            return "" !== this._name && (str += this._name + " "), str + this._str
        }, Version
    }();
    battleline.Version = Version
}(com.battleline || (com.battleline = {}))
}(com || (com = {}));
var com;
! function(com) {
! function(battleline) {
    var Dictionary = function() {
        function Dictionary() {
            this._keys = [], this._values = []
        }
        return Object.defineProperty(Dictionary.prototype, "keys", {
            get: function() {
                return this._keys.slice(0)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Dictionary.prototype, "values", {
            get: function() {
                return this._values.slice(0)
            },
            enumerable: !0,
            configurable: !0
        }), Dictionary.prototype.containsKey = function(key) {
            return this.getKeyIndex(key) >= 0
        }, Dictionary.prototype.add = function(key, value, overwrite) {
            if (void 0 === overwrite && (overwrite = !1), null === key || void 0 === key) throw new Error("Keys cannot be null or undefined!");
            var index = this.getKeyIndex(key);
            if (index >= 0) {
                if (!overwrite) throw new Error("Key already existed! " + key);
                this._values[index] = value
            } else this._keys.push(key), this._values.push(value)
        }, Dictionary.prototype.remove = function(key, strict) {
            void 0 === strict && (strict = !0);
            var index = this.getKeyIndex(key);
            if (strict && index < 0) throw new Error("Key did not exist!");
            this._keys.splice(index, 1), this._values.splice(index, 1)
        }, Dictionary.prototype.getValue = function(key, strict, defaultValue) {
            void 0 === strict && (strict = !1), void 0 === defaultValue && (defaultValue = null);
            var index = this.getKeyIndex(key);
            if (index < 0) {
                if (strict) throw new Error("Key did not exist!");
                return defaultValue
            }
            return this._values[index]
        }, Dictionary.prototype.getKeyIndex = function(key) {
            for (var i = 0; i < this._keys.length; ++i)
                if (this._keys[i] === key) return i;
            return -1
        }, Dictionary
    }();
    battleline.Dictionary = Dictionary
}(com.battleline || (com.battleline = {}))
}(com || (com = {}));
var com;
! function(com) {
! function(battleline) {
    var URLVariables = function(_super) {
        function URLVariables(url) {
            void 0 === url && (url = null);
            var _this = _super.call(this) || this;
            return url && _this.decode(url), _this
        }
        return __extends(URLVariables, _super), URLVariables.prototype.clear = function() {
            this.keys.length = 0, this.values.length = 0
        }, URLVariables.prototype.decode = function(url) {
            this.clear();
            var query = url;
            query.indexOf("?") >= 0 && (query = query.substr(query.indexOf("?") + 1));
            for (var entries = query.split("&"), i = 0; i < entries.length; ++i) {
                var key = entries[i],
                    value = void 0;
                key.indexOf("=") >= 0 && (key = key.substr(0, key.indexOf("=")), value = entries[i].substr(entries[i].indexOf("=") + 1)), key = decodeURIComponent(key), value = decodeURIComponent(value), this.add(key, value, !0)
            }
        }, URLVariables
    }(battleline.Dictionary);
    battleline.URLVariables = URLVariables
}(com.battleline || (com.battleline = {}))
}(com || (com = {}));
var com;
! function(com) {
! function(battleline) {
    ! function(Platform) {
        function detectOS(ua, urlVars) {
            var urlVar = urlVars.getValue("os", !1, "").toLowerCase();
            if ("" !== urlVar) {
                for (var i = 0; i < battleline.OS.values.length; ++i)
                    if (urlVar === battleline.OS.values[i].identifier.toLowerCase()) {
                        Platform.os = battleline.OS.values[i];
                        break
                    }
                battleline.Logger.info("os URL Variable found. Forcing os to " + Platform.os.identifier)
            } else ua.indexOf("cros") >= 0 ? Platform.os = battleline.OS.ChromeOS : ua.indexOf("android") >= 0 ? (Platform.os = battleline.OS.Android, Platform.osVersion.fromVersionString(getVerStr(ua, "android ")), 6 === Platform.osVersion.major ? Platform.osVersion.name = "Marshmallow" : 5 === Platform.osVersion.major ? Platform.osVersion.name = "Lollipop" : 4 === Platform.osVersion.major && Platform.osVersion.minor >= 4 ? Platform.osVersion.name = "KitKat" : 4 === Platform.osVersion.major && Platform.osVersion.minor >= 1 ? Platform.osVersion.name = "Jelly Bean" : 4 === Platform.osVersion.major ? Platform.osVersion.name = "Ice Cream Sandwich" : 3 === Platform.osVersion.major ? Platform.osVersion.name = "Honeycomb" : 2 === Platform.osVersion.major && Platform.osVersion.minor >= 3 ? Platform.osVersion.name = "Gingerbread" : 2 === Platform.osVersion.major && Platform.osVersion.minor >= 2 ? Platform.osVersion.name = "Froyo" : 2 === Platform.osVersion.major ? Platform.osVersion.name = "Eclair" : 1 === Platform.osVersion.major && 6 === Platform.osVersion.minor ? Platform.osVersion.name = "Donut" : 1 === Platform.osVersion.major && 5 === Platform.osVersion.minor && (Platform.osVersion.name = "Cupcake")) : ua.indexOf("iphone") >= 0 || ua.indexOf("ipad") >= 0 || ua.indexOf("ipod") >= 0 ? (Platform.os = battleline.OS.iOS, ua.indexOf("iphone os ") >= 0 ? Platform.osVersion.fromVersionString(getVerStr(ua, "iphone os ")) : ua.indexOf("cpu os ") >= 0 && Platform.osVersion.fromVersionString(getVerStr(ua, "cpu os "))) : ua.indexOf("windows") >= 0 ? (Platform.os = battleline.OS.Windows, ua.indexOf("windows phone os ") >= 0 ? Platform.osVersion.fromVersionString(getVerStr(ua, "windows phone os "), "Windows Phone") : ua.indexOf("windows nt 6.3") >= 0 ? Platform.osVersion.fromVersionNumbers(6, 3, 0, 0, "Windows 8.1") : ua.indexOf("windows nt 6.2") >= 0 ? Platform.osVersion.fromVersionNumbers(6, 2, 0, 0, "Windows 8") : ua.indexOf("windows nt 6.1") >= 0 ? Platform.osVersion.fromVersionNumbers(6, 1, 0, 0, "Windows 7") : ua.indexOf("windows nt 6.0") >= 0 ? Platform.osVersion.fromVersionNumbers(6, 0, 0, 0, "Windows Vista") : ua.indexOf("windows nt 5.2") >= 0 ? Platform.osVersion.fromVersionNumbers(5, 2, 0, 0, "Windows XP x64") : ua.indexOf("windows nt 5.1") >= 0 ? Platform.osVersion.fromVersionNumbers(5, 1, 0, 0, "Windows XP") : ua.indexOf("windows nt 5.01") >= 0 ? Platform.osVersion.fromVersionNumbers(5, 0, 1, 0, "Windows 2000 SP1") : ua.indexOf("windows nt 5.0") >= 0 ? Platform.osVersion.fromVersionNumbers(5, 0, 0, 0, "Windows 2000") : ua.indexOf("windows nt 4.0") >= 0 ? Platform.osVersion.fromVersionNumbers(4, 0, 0, 0, "Windows NT") : ua.indexOf("windows 98; win 9x 4.90") >= 0 ? Platform.osVersion.fromName("Windows Me") : ua.indexOf("windows 98") >= 0 ? Platform.osVersion.fromName("Windows 98") : ua.indexOf("windows 95") >= 0 ? Platform.osVersion.fromName("Windows 95") : ua.indexOf("windows ce") >= 0 ? Platform.osVersion.fromName("Windows CE") : (Platform.osVersion.fromVersionString(getVerStr(ua, "windows nt ")), Platform.osVersion.name = "Windows " + Platform.osVersion.major + "." + Platform.osVersion.minor)) : ua.indexOf("mac os x ") >= 0 ? (Platform.os = battleline.OS.Mac, Platform.osVersion.fromVersionString(getVerStr(ua, "mac os x ")), 10 === Platform.osVersion.major && (12 === Platform.osVersion.minor ? Platform.osVersion.name = "Sierra" : 11 === Platform.osVersion.minor ? Platform.osVersion.name = "El Capitan" : 10 === Platform.osVersion.minor ? Platform.osVersion.name = "Yosemite" : 9 === Platform.osVersion.minor ? Platform.osVersion.name = "Mavericks" : 8 === Platform.osVersion.minor ? Platform.osVersion.name = "Mountain Lion" : 7 === Platform.osVersion.minor ? Platform.osVersion.name = "Lion" : 6 === Platform.osVersion.minor ? Platform.osVersion.name = "Snow Leopard" : 5 === Platform.osVersion.minor ? Platform.osVersion.name = "Leopard" : 4 === Platform.osVersion.minor ? Platform.osVersion.name = "Tiger" : 3 === Platform.osVersion.minor ? Platform.osVersion.name = "Panther" : 2 === Platform.osVersion.minor ? Platform.osVersion.name = "Jaguar" : 1 === Platform.osVersion.minor ? Platform.osVersion.name = "Puma" : 0 === Platform.osVersion.minor && (Platform.osVersion.name = "Cheetah"))) : Platform.os = battleline.OS.Other
        }

        function detectDevice(ua, urlVars) {
            var urlVar = urlVars.getValue("device", !1, "").toLowerCase();
            if ("" !== urlVar) {
                for (var i = 0; i < battleline.DeviceType.values.length; ++i)
                    if (urlVar === battleline.DeviceType.values[i].identifier.toLowerCase()) {
                        Platform.deviceType = battleline.DeviceType.values[i];
                        break
                    }
                battleline.Logger.info("device URL Variable found. Forcing deviceType to " + Platform.deviceType.identifier)
            } else Platform.os === battleline.OS.iOS ? ua.indexOf("ipad") >= 0 ? Platform.deviceType = battleline.DeviceType.Tablet : Platform.deviceType = battleline.DeviceType.Handheld : Platform.os === battleline.OS.Android ? ua.indexOf("mobile") >= 0 ? Platform.deviceType = battleline.DeviceType.Handheld : Platform.deviceType = battleline.DeviceType.Tablet : Platform.os === battleline.OS.Windows && ua.indexOf("windows phone os") >= 0 ? Platform.deviceType = battleline.DeviceType.Handheld : Platform.deviceType = battleline.DeviceType.Computer
        }

        function detectBrowser(ua, urlVars) {
            var urlVar = urlVars.getValue("browser", !1, "").toLowerCase();
            if ("" !== urlVar) {
                for (var i = 0; i < battleline.Browser.values.length; ++i)
                    if (urlVar === battleline.Browser.values[i].identifier.toLowerCase()) {
                        Platform.browser = battleline.Browser.values[i];
                        break
                    }
                battleline.Logger.info("browser URL Variable found. Forcing browser to " + Platform.browser.identifier)
            } else ua.indexOf("edge") >= 0 ? (Platform.browser = battleline.Browser.Edge, Platform.browserVersion.fromVersionString(getVerStr(ua, "edge/"))) : ua.indexOf("firefox") >= 0 ? (Platform.browser = battleline.Browser.Firefox, Platform.browserVersion.fromVersionString(getVerStr(ua, "firefox/"))) : ua.indexOf("opr") >= 0 ? (Platform.browser = battleline.Browser.Opera, Platform.browserVersion.fromVersionString(getVerStr(ua, "opr/"))) : ua.indexOf("opera") >= 0 ? (Platform.browser = battleline.Browser.Opera, Platform.browserVersion.fromVersionString(getVerStr(ua, "opera/"))) : ua.indexOf("vivaldi") >= 0 ? (Platform.browser = battleline.Browser.Vivaldi, Platform.browserVersion.fromVersionString(getVerStr(ua, "vivaldi/"))) : ua.indexOf("chrome") >= 0 ? (Platform.browser = battleline.Browser.Chrome, Platform.browserVersion.fromVersionString(getVerStr(ua, "chrome/"))) : Platform.os === battleline.OS.iOS && ua.indexOf("crios") >= 0 ? (Platform.browser = battleline.Browser.Chrome, Platform.browserVersion.fromVersionString(getVerStr(ua, "crios/"))) : Platform.os === battleline.OS.iOS && ua.indexOf("fxios") >= 0 ? (Platform.browser = battleline.Browser.Firefox, Platform.browserVersion.fromVersionString(getVerStr(ua, "fxios/"))) : Platform.os === battleline.OS.iOS && ua.indexOf("safari") >= 0 && ua.indexOf("version/") >= 0 ? (Platform.browser = battleline.Browser.Safari, Platform.browserVersion.fromVersionString(getVerStr(ua, "version/"))) : Platform.os === battleline.OS.Mac && ua.indexOf("safari") >= 0 && ua.indexOf("version/") >= 0 ? (Platform.browser = battleline.Browser.Safari, Platform.browserVersion.fromVersionString(getVerStr(ua, "version/"))) : ua.indexOf("msie") >= 0 ? (Platform.browser = battleline.Browser.IE, Platform.browserVersion.fromVersionString(getVerStr(ua, "msie "))) : ua.indexOf("trident/7.") >= 0 && (Platform.browser = battleline.Browser.IE, Platform.browserVersion.fromVersionString(getVerStr(ua, "rv:")));
            Platform.browserVersion.name = Platform.browser.identifier
        }

        function getVerStr(ua, prefix) {
            var verStr = ua.substr(ua.indexOf(prefix) + prefix.length);
            for (verStr.indexOf(" ") >= 0 && (verStr = verStr.substr(0, verStr.indexOf(" "))), verStr.indexOf(";") >= 0 && (verStr = verStr.substr(0, verStr.indexOf(";"))), verStr.indexOf(")") >= 0 && (verStr = verStr.substr(0, verStr.indexOf(")"))); verStr.indexOf("w") >= 0;) verStr = verStr.replace("w", "");
            for (; verStr.indexOf("_") >= 0;) verStr = verStr.replace("_", ".");
            return verStr
        }
        Platform.forced = !1;
        var init = !1;
        Platform.initialize = function(url) {
            if (!init) {
                init = !0, Platform.deviceType = battleline.DeviceType.Other, Platform.os = battleline.OS.Other, Platform.osVersion = new battleline.Version, Platform.browser = battleline.Browser.Other, Platform.browserVersion = new battleline.Version, Platform.userAgent = navigator.userAgent;
                var ua = navigator.userAgent.toLowerCase(),
                    urlVars = new battleline.URLVariables(url);
                detectOS(ua, urlVars), detectDevice(ua, urlVars), detectBrowser(ua, urlVars)
            }
        }
    }(battleline.Platform || (battleline.Platform = {}))
}(com.battleline || (com.battleline = {}))
}(com || (com = {}));
var com;
! function(com) {
! function(battleline) {
    var Message = function() {
        function Message(cmd, content) {
            this.gameMsg = !0, this.content = null, this.cmd = cmd, this.content = content
        }
        return Message.REGISTER = "register", Message.LAUNCH = "launch", Message.START = "start", Message.RELOAD = "reload", Message.LOAD = "load", Message.REQUEST_FULLSCREEN = "requestFullscreen", Message.ENTER_FULLSCREEN = "enterFullscreen", Message.REQUEST_WINDOWED = "requestWindowed", Message.EXIT_FULLSCREEN = "exitFullscreen", Message.KEYPRESS = "keypress", Message.READY_ASCENDEUM_INTERSTITIALS = "readyAscendeumInterstitials", Message.AD_CLOSED = "adClosed", Message.AD_BLOCKED = "adBlocked", Message
    }();
    battleline.Message = Message
}(com.battleline || (com.battleline = {}))
}(com || (com = {}));
var com;
! function(com) {
! function(battleline) {
    var Delegate = function() {
        function Delegate(method, scope) {
            void 0 === method && (method = null), void 0 === scope && (scope = null), this._method = null, this._scope = null, this.invoke = this.unset, (scope || method) && this.set(method, scope)
        }
        return Object.defineProperty(Delegate.prototype, "method", {
            get: function() {
                return this._method
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Delegate.prototype, "scope", {
            get: function() {
                return this._scope
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(Delegate.prototype, "isSet", {
            get: function() {
                return null !== this._method
            },
            enumerable: !0,
            configurable: !0
        }), Delegate.prototype.set = function(method, scope) {
            if (void 0 === scope && (scope = null), this._scope || this._method) throw new Error("An existing delegate handler must be cleared before a new one can be set!");
            if (!method) throw new Error("Method must be defined! Use clear() to unset a delegate.");
            this._method = method, this._scope = scope, this.invoke = this.fire
        }, Delegate.prototype.clear = function() {
            this._method = null, this._scope = null, this.invoke = this.unset
        }, Delegate.prototype.equals = function(method, scope) {
            return void 0 === scope && (scope = null), this._scope === scope && this._method === method
        }, Delegate.prototype.unset = function() {
            throw new Error("Tried to invoke a delegate that was not set!")
        }, Delegate.prototype.fire = function() {
            return this._method.apply(this._scope, arguments)
        }, Delegate
    }();
    battleline.Delegate = Delegate
}(com.battleline || (com.battleline = {}))
}(com || (com = {}));
var com;
! function(com) {
! function(battleline) {
    var ConsoleLogger = function() {
        function ConsoleLogger() {}
        return ConsoleLogger.prototype.log = function(msg) {
            console && console.log && console.log(msg)
        }, ConsoleLogger.prototype.info = function(msg) {
            console && console.info ? console.info(msg) : this.log("[INFO] " + msg)
        }, ConsoleLogger.prototype.warn = function(msg) {
            console && console.warn ? console.warn(msg) : this.log("[WARN] " + msg)
        }, ConsoleLogger.prototype.error = function(msg) {
            console && console.error ? console.error(msg) : this.log("[ERROR] " + msg)
        }, ConsoleLogger.prototype.trace = function() {
            console && console.trace ? console.trace() : console && console.error ? console.error("[TRACE]") : this.log("[TRACE] Tracing not available.")
        }, ConsoleLogger
    }();
    ! function(Logger) {
        function addLogger(logger) {
            if (_loggers.indexOf(logger) >= 0) return void warn("Tried to add a logger instance that was already added!");
            _loggers.push(logger);
            for (var e = 0; e < _buffer.length; ++e)
                for (var entry = _buffer[e], i = 0; i < entry.count; ++i) "log" === entry.stream ? logger.log(entry.msg) : "info" === entry.stream ? logger.info(entry.msg) : "warn" === entry.stream ? logger.warn(entry.msg) : "error" === entry.stream ? logger.error(entry.msg) : "trace" === entry.stream && logger.trace()
        }

        function removeLogger(logger) {
            var index = _loggers.indexOf(logger);
            if (index < 0) return void warn("Tried to remove a logger instance that was not addded!");
            _loggers.splice(index, 1)
        }

        function pushMessage(stream, msg) {
            if (_buffer.length > 0) {
                var last = _buffer[_buffer.length - 1];
                if (last.stream === stream && last.msg === msg) return void last.count++
            }
            _buffer.push({
                stream: stream,
                msg: msg,
                count: 1
            }), _buffer.length > 100 && _buffer.splice(0, 1)
        }

        function log(msg) {
            pushMessage("log", msg);
            for (var i = 0; i < _loggers.length; ++i) _loggers[i].log(msg)
        }

        function info(msg) {
            pushMessage("info", msg);
            for (var i = 0; i < _loggers.length; ++i) _loggers[i].info(msg)
        }

        function warn(msg) {
            pushMessage("warn", msg);
            for (var i = 0; i < _loggers.length; ++i) _loggers[i].warn(msg)
        }

        function error(msg) {
            pushMessage("error", msg);
            for (var i = 0; i < _loggers.length; ++i) _loggers[i].error(msg)
        }

        function trace() {
            pushMessage("trace", null);
            for (var i = 0; i < _loggers.length; ++i) _loggers[i].trace()
        }
        var _loggers = [new ConsoleLogger],
            _buffer = new Array;
        Logger.addLogger = addLogger, Logger.removeLogger = removeLogger, Logger.log = log, Logger.info = info, Logger.warn = warn, Logger.error = error, Logger.trace = trace
    }(battleline.Logger || (battleline.Logger = {}))
}(com.battleline || (com.battleline = {}))
}(com || (com = {}));
var com;
! function(com) {
! function(battleline) {
    var DelegateEvent = function() {
        function DelegateEvent() {
            this._delegates = new Array, this._invoking = !1, this._iterator = -1, this._iteratorStop = -1, this.invoke = this.fire0
        }
        return Object.defineProperty(DelegateEvent.prototype, "hasDelegates", {
            get: function() {
                return battleline.Logger.warn("DelegateEvent::hasDelegates is deprecated."), this._delegates.length > 0
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(DelegateEvent.prototype, "count", {
            get: function() {
                return this._delegates.length
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(DelegateEvent.prototype, "isEmpty", {
            get: function() {
                return 0 === this._delegates.length
            },
            enumerable: !0,
            configurable: !0
        }), DelegateEvent.prototype.add = function(method, scope) {
            if (this.contains(method, scope)) throw new Error("Tried to add a delegate that was already added!");
            this._delegates.push(new battleline.Delegate(method, scope)), 1 === this._delegates.length ? this.invoke = this.fire1 : 2 === this._delegates.length && (this.invoke = this.fire)
        }, DelegateEvent.prototype.remove = function(method, scope) {
            var index = this.indexOf(method, scope);
            if (index < 0) throw new Error("Tried to remove a delegate that was not added!");
            this._delegates.splice(index, 1), this._invoking && (this._iteratorStop--, this._iterator >= index && this._iterator--), 1 === this._delegates.length ? this.invoke = this.fire1 : 0 === this._delegates.length && (this.invoke = this.fire0)
        }, DelegateEvent.prototype.removeAll = function() {
            battleline.Logger.warn("DelegateEvent::removeAll() is deprecated."), this.clear()
        }, DelegateEvent.prototype.clear = function() {
            for (var dels = this._delegates, i = 0; i < dels.length; ++i) dels[i].clear();
            this._delegates.length = 0, this.invoke = this.fire0, this._invoking && (this._iterator = 0, this._iteratorStop = 0)
        }, DelegateEvent.prototype.reset = function() {
            this._iterator = 0, this._invoking && (this._iterator = 0, this._iteratorStop = 0, this._invoking = !1)
        }, DelegateEvent.prototype.contains = function(method, scope) {
            return this.indexOf(method, scope) >= 0
        }, DelegateEvent.prototype.indexOf = function(method, scope) {
            for (var dels = this._delegates, i = 0; i < dels.length; ++i)
                if (dels[i].equals(method, scope)) return i;
            return -1
        }, DelegateEvent.prototype.fire0 = function() {}, DelegateEvent.prototype.fire1 = function() {
            if (this._invoking) throw new Error("Tried to trigger a DelegateEvent that is currently firing. Recursive events are not supported nor advised!");
            var dels = this._delegates,
                del = dels[0];
            this._invoking = !0, this._iterator = 0, this._iteratorStop = 1, del.invoke.apply(del, arguments), this._invoking = !1, this._iterator = -1, this._iteratorStop = -1
        }, DelegateEvent.prototype.fire = function() {
            if (this._invoking) throw new Error("Tried to trigger a DelegateEvent that is currently firing. Recursive events are not supported nor advised!");
            var del, dels = this._delegates,
                a = arguments;
            for (this._iteratorStop = dels.length, this._invoking = !0, this._iterator = 0; this._iterator < this._iteratorStop; ++this._iterator) del = dels[this._iterator], del.invoke.apply(del, a);
            this._invoking = !1, this._iterator = -1, this._iteratorStop = -1
        }, DelegateEvent
    }();
    battleline.DelegateEvent = DelegateEvent
}(com.battleline || (com.battleline = {}))
}(com || (com = {}));
var com;
! function(com) {
! function(battleline) {
    var Fullscreen;
    ! function(Fullscreen) {
        function requestEnter(embed) {
            this._mode.requestEnter(embed)
        }

        function requestExit() {
            this._mode.requestExit()
        }
        Fullscreen.onEnterFullscreen = new battleline.DelegateEvent, Fullscreen.onExitFullscreen = new battleline.DelegateEvent, Fullscreen.initialize = function() {
            TrueFullscreen.isSupported ? (console.log("using true fullscreen mode"), Fullscreen._mode = new TrueFullscreen) : Fullscreen._mode = new Simulated
        }, Object.defineProperty(Fullscreen, "isFullscreen", {
            get: function() {
                return Fullscreen._mode.isFullscreen
            }
        }), Object.defineProperty(Fullscreen, "fullscreenGame", {
            get: function() {
                return Fullscreen._mode.fullscreenGame
            }
        }), Fullscreen.requestEnter = requestEnter, Fullscreen.requestExit = requestExit
    }(Fullscreen = battleline.Fullscreen || (battleline.Fullscreen = {}));
    var TrueFullscreen = function() {
            function TrueFullscreen() {
                this.isFullscreen = !1, this.fullscreenGame = null, this.document_change = this.document_change.bind(this), document.addEventListener(TrueFullscreen.api.events.change, this.document_change, !1)
            }
            return TrueFullscreen.prototype.document_change = function(evt) {
                console.log("fullscreen change");
                var target = evt.target;
                if (target && target.__embed) {
                    var embed = target.__embed,
                        newIsFullscreen = !!document[TrueFullscreen.api.element];
                    if (this.isFullscreen === newIsFullscreen) return;
                    this.isFullscreen = newIsFullscreen, this.isFullscreen ? (this.fullscreenGame = embed, Fullscreen.onEnterFullscreen.invoke(embed)) : (this.fullscreenGame = null, Fullscreen.onExitFullscreen.invoke(embed))
                } else console.log("   >  Not an embed element!")
            }, TrueFullscreen.prototype.requestEnter = function(embed) {
                console.log("TFS req enter. isFS=" + this.isFullscreen), this.isFullscreen || embed.embedElement[TrueFullscreen.api.request]()
            }, TrueFullscreen.prototype.requestExit = function() {
                console.log("TFS req exit. isFS=" + this.isFullscreen), this.isFullscreen && document[TrueFullscreen.api.exit]()
            }, TrueFullscreen.apis = {
                w3: {
                    element: "fullscreenElement",
                    enabled: "fullscreenEnabled",
                    events: {
                        change: "fullscreenchange",
                        error: "fullscreenerror"
                    },
                    exit: "exitFullscreen",
                    request: "requestFullscreen"
                },
                webkit: {
                    element: "webkitCurrentFullScreenElement",
                    enabled: "webkitFullscreenEnabled",
                    events: {
                        change: "webkitfullscreenchange",
                        error: "webkitfullscreenerror"
                    },
                    exit: "webkitCancelFullScreen",
                    request: "webkitRequestFullScreen"
                },
                moz: {
                    element: "mozFullScreenElement",
                    enabled: "mozFullScreenEnabled",
                    events: {
                        change: "mozfullscreenchange",
                        error: "mozfullscreenerror"
                    },
                    exit: "mozCancelFullScreen",
                    request: "mozRequestFullScreen"
                },
                ms: {
                    element: "msFullscreenElement",
                    enabled: "msFullscreenEnabled",
                    events: {
                        change: "MSFullscreenChange",
                        error: "MSFullscreenError"
                    },
                    exit: "msExitFullscreen",
                    request: "msRequestFullscreen"
                }
            }, TrueFullscreen.api = null, TrueFullscreen.isSupported = function() {
                var url = window.location.href;
                battleline.Platform.initialize(url);
                var apis = TrueFullscreen.apis;
                console.log("TFS support test", battleline.Platform.os);
                var _api = null;
                for (var vendor in apis)
                    if (apis[vendor].enabled in document) {
                        _api = apis[vendor];
                        break
                    }
                battleline.Platform.os === battleline.OS.iOS && (battleline.Logger.info("Page is disabling the fullscreen api on iOS due to a poor user experience."), _api = null);
                var hashStr = "";
                return url.indexOf("#") >= 0 && (hashStr = url.substr(url.indexOf("#"))), (hashStr.indexOf("nofs") >= 0 || hashStr.indexOf("nofullscreen") >= 0) && (battleline.Logger.info("Forced no fullscreen support."), _api = null, !0), TrueFullscreen.api = _api, !!_api
            }(), TrueFullscreen
        }(),
        Simulated = function() {
            function Simulated() {
                this.isFullscreen = !1, this.fullscreenGame = null;
                var that = this;
                window.addEventListener("keyup", function(evt) {
                    "Escape" === evt.key ? Fullscreen._mode === that && (Fullscreen.requestExit(), evt.preventDefault(), evt.stopPropagation(), evt.stopImmediatePropagation()) : "Tab" === evt.key && Fullscreen._mode === that && Fullscreen.isFullscreen && Fullscreen.fullscreenGame.iframe.focus()
                }, !0)
            }
            return Simulated.prototype.requestEnter = function(embed) {
                if (this.fullscreenGame !== embed) {
                    this.isFullscreen && this.requestExit();
                    var style = embed.embedElement.style;
                    style.width = "100%", style.height = "100%", style.overflow = "hidden", style.position = "fixed", style.top = "0", style.left = "0", style.zIndex = "2147483647", this.isFullscreen = !0, this.fullscreenGame = embed, this.fullscreenGame.onKeypress.add(this.fullscreenGame_onKeypress, this), Fullscreen.onEnterFullscreen.invoke(embed)
                }
            }, Simulated.prototype.requestExit = function() {
                if (this.isFullscreen) {
                    var style = this.fullscreenGame.embedElement.style;
                    style.width = null, style.height = null, style.overflow = null, style.position = null, style.top = null, style.left = null, style.zIndex = null, this.fullscreenGame.onKeypress.remove(this.fullscreenGame_onKeypress, this);
                    var embed = this.fullscreenGame;
                    this.isFullscreen = !1, this.fullscreenGame = null, Fullscreen.onExitFullscreen.invoke(embed)
                }
            }, Simulated.prototype.fullscreenGame_onKeypress = function(key) {
                this.isFullscreen ? "Escape" === key && Fullscreen._mode === this && Fullscreen.requestExit() : "Tab" === key && Fullscreen._mode === this && Fullscreen.isFullscreen && Fullscreen.fullscreenGame.iframe.focus()
            }, Simulated
        }();
    Fullscreen.initialize()
}(com.battleline || (com.battleline = {}))
}(com || (com = {}));
var com;
! function(com) {
! function(battleline) {
    var Embed = function() {
        function Embed(iframe) {
            this.onLaunchReady = new battleline.DelegateEvent, this.onStartReady = new battleline.DelegateEvent, this.onKeypress = new battleline.DelegateEvent, this.isRegistered = !1, this.isLaunched = !1, this.isStarted = !1, this.adHolder = null, this._ascendeumInterstitialsEnabled = !1, this._ascendeumInterstitialsConfig = null, this.iframe = iframe, this.embedElement = iframe.parentElement, this.embedElement.__embed = this, this.skipBtn_click = this.skipBtn_click.bind(this), battleline.Fullscreen.onEnterFullscreen.add(this.fullscreen_onEnterFullscreen, this), battleline.Fullscreen.onExitFullscreen.add(this.fullscreen_onExitFullscreen, this), this.iframe.focus()
        }
        return Embed.prototype.rcv_register = function(content) {
            this.register(), this.launchReady()
        }, Embed.prototype.register = function() {
            this.isRegistered || (this.isRegistered = !0, this.send(new battleline.Message(battleline.Message.REGISTER, {
                url: window.location.href
            })))
        }, Embed.prototype.launchReady = function() {
            this.isLaunched || (this.onLaunchReady.isEmpty ? this.launch() : this.onLaunchReady.invoke(this))
        }, Embed.prototype.launch = function(data) {
            void 0 === data && (data = null), this.isLaunched || (this.isLaunched = !0, this.send(new battleline.Message(battleline.Message.LAUNCH, {
                launchArgs: data
            })))
        }, Embed.prototype.rcv_start = function(content) {
            this.startReady()
        }, Embed.prototype.startReady = function() {
            this.onStartReady.isEmpty ? this.start() : this.onStartReady.invoke(this)
        }, Embed.prototype.start = function() {
            this.isStarted || (this.isStarted = !0, this.send(new battleline.Message(battleline.Message.START, {})))
        }, Embed.prototype.rcv_reload = function(content) {
            document.location.reload()
        }, Embed.prototype.rcv_load = function(content) {
            document.location.assign(content.toURL)
        }, Embed.prototype.rcv_requestFullscreen = function(content) {
            !1 === battleline.Fullscreen.isFullscreen && battleline.Fullscreen.requestEnter(this)
        }, Embed.prototype.enterFullscreen = function() {
            this.send(new battleline.Message(battleline.Message.ENTER_FULLSCREEN))
        }, Embed.prototype.rcv_requestWindowed = function(content) {
            battleline.Fullscreen.fullscreenGame === this && battleline.Fullscreen.requestExit()
        }, Embed.prototype.exitFullscreen = function() {
            this.send(new battleline.Message(battleline.Message.EXIT_FULLSCREEN))
        }, Embed.prototype.rcv_keypress = function(content) {
            this.onKeypress.invoke(content.key)
        }, Embed.prototype.rcv_readyAscendeumInterstitials = function(content) {
            this._ascendeumInterstitialsConfig = content, this.preloadAscendeumInterstitial()
        }, Embed.prototype.preloadAscendeumInterstitial = function() {
            function skipCountDown() {
                skipButtonTimeout = null, skipCountsLeft--, 0 === skipCountsLeft ? (skipBtn.style.opacity = "1", skipBtn.innerHTML = "Close Ad", skipBtn.style.pointerEvents = "auto") : (skipBtn.innerHTML = skipCountsLeft + "", skipButtonTimeout = setTimeout(skipCountDown, 1e3))
            }
            if (!0 !== window.adsAllowed) return void this.send(new battleline.Message(battleline.Message.AD_BLOCKED));
            var el = document.createElement("div");
            el.style.cssText = "position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #000000;", this.adHolder = el;
            var adDiv = document.createElement("div");
            adDiv.style.cssText = "display: inline-block; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);";
            var newId = this._ascendeumInterstitialsConfig.baseId + Math.floor(1e5 * Math.random());
            adDiv.id = newId, el.appendChild(adDiv);
            var skipBtn = document.createElement("div");
            skipBtn.style.cssText = "\ncolor: #FFFFFF;\nbackground: rgba(0,0,0,0.15);\ndisplay: inline-block;\nfont-family: sans-serif;\nfont-weight: normal;\nfont-size: 18px;\npadding: 12px 36px;\nborder: solid 1px rgba(255,255,255,0.3);\nborder-right-width: 0;\nposition: absolute;\nbottom: 20px;\nright: 0;\nfont-weight: 500;\ncursor: pointer;\n-webkit-user-select: none;\n-ms-user-select: none;\nuser-select: none;\n", skipBtn.innerHTML = "\nClose Ad\n", skipBtn.onclick = this.skipBtn_click, el.appendChild(skipBtn), skipBtn.style.pointerEvents = "none";
            var skipCountsLeft = 5;
            skipBtn.innerHTML = skipCountsLeft + "", skipBtn.style.opacity = "0.65";
            var skipButtonTimeout = null;
            skipButtonTimeout = setTimeout(skipCountDown, 1e3), this.embedElement.appendChild(el);
            var pbjs = window.pbjs,
                that = this;
            try {
                pbjs.que.push(function() {
                    pbjs.loadDynamicAds([{
                        code: newId,
                        adunit: that._ascendeumInterstitialsConfig.adUnit
                    }], 2e3, function() {})
                })
            } catch (e) {
                console.log("Error invoking PBJS load dynamic ads"), null !== skipButtonTimeout && (clearTimeout(skipButtonTimeout), skipButtonTimeout = null, this.skipBtn_click())
            }
        }, Embed.prototype.skipBtn_click = function(ev) {
            this.adHolder && (this.adHolder.parentElement.removeChild(this.adHolder), this.adHolder = null, this.send(new battleline.Message(battleline.Message.AD_CLOSED)))
        }, Embed.prototype.send = function(msg) {
            this.iframe.contentWindow.postMessage(msg, "*")
        }, Embed.prototype.rcv = function(msg) {
            msg.cmd === battleline.Message.REGISTER ? this.rcv_register(msg.content) : msg.cmd === battleline.Message.START ? this.rcv_start(msg.content) : msg.cmd === battleline.Message.RELOAD ? this.rcv_reload(msg.content) : msg.cmd === battleline.Message.LOAD ? this.rcv_load(msg.content) : msg.cmd === battleline.Message.REQUEST_FULLSCREEN ? this.rcv_requestFullscreen(msg.content) : msg.cmd === battleline.Message.REQUEST_WINDOWED ? this.rcv_requestWindowed(msg.content) : msg.cmd === battleline.Message.KEYPRESS ? this.rcv_keypress(msg.content) : msg.cmd === battleline.Message.READY_ASCENDEUM_INTERSTITIALS && this.rcv_readyAscendeumInterstitials(msg.content)
        }, Embed.prototype.fullscreen_onEnterFullscreen = function(embed) {
            embed === this && this.enterFullscreen()
        }, Embed.prototype.fullscreen_onExitFullscreen = function(embed) {
            embed === this && this.exitFullscreen()
        }, Embed
    }();
    battleline.Embed = Embed
}(com.battleline || (com.battleline = {}))
}(com || (com = {}));
var com;
! function(com) {
! function(battleline) {
    ! function(Site) {
        function getEmbed(iframe) {
            var embed = embeds.getValue(iframe);
            return null === embed && (embed = new battleline.Embed(iframe), embeds.add(iframe, embed), Site.onGameEmbedded.invoke(embed)), embed
        }

        function window_message(evt) {
            if (evt && evt.data && evt.data.gameMsg) {
                getEmbed(evt.source.frameElement).rcv(evt.data)
            }
        }
        Site.onGameEmbedded = new battleline.DelegateEvent;
        var embeds = new battleline.Dictionary;
        ! function() {
            window.addEventListener("message", window_message)
        }()
    }(battleline.Site || (battleline.Site = {}))
}(com.battleline || (com.battleline = {}))
}(com || (com = {}));