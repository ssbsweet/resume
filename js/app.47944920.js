(function(t) {
    function e(e) {
        for (var s, l, n = e[0], c = e[1], o = e[2], v = 0, h = []; v < n.length; v++) l = n[v], Object.prototype.hasOwnProperty.call(i, l) && i[l] && h.push(i[l][0]), i[l] = 0;
        for (s in c) Object.prototype.hasOwnProperty.call(c, s) && (t[s] = c[s]);
        d && d(e);
        while (h.length) h.shift()();
        return r.push.apply(r, o || []), a()
    }

    function a() {
        for (var t, e = 0; e < r.length; e++) {
            for (var a = r[e], s = !0, n = 1; n < a.length; n++) {
                var c = a[n];
                0 !== i[c] && (s = !1)
            }
            s && (r.splice(e--, 1), t = l(l.s = a[0]))
        }
        return t
    }
    var s = {},
        i = {
            app: 0
        },
        r = [];

    function l(e) {
        if (s[e]) return s[e].exports;
        var a = s[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, l), a.l = !0, a.exports
    }
    l.m = t, l.c = s, l.d = function(t, e, a) {
        l.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        })
    }, l.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, l.t = function(t, e) {
        if (1 & e && (t = l(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (l.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var s in t) l.d(a, s, function(e) {
                return t[e]
            }.bind(null, s));
        return a
    }, l.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return l.d(e, "a", e), e
    }, l.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, l.p = "./";
    var n = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = n.push.bind(n);
    n.push = e, n = n.slice();
    for (var o = 0; o < n.length; o++) e(n[o]);
    var d = c;
    r.push([0, "chunk-vendors"]), a()
})({
    0: function(t, e, a) {
        t.exports = a("56d7")
    },
    "034f": function(t, e, a) {
        "use strict";
        var s = a("85ec"),
            i = a.n(s);
        i.a
    },
    "189a": function(t, e) {
        t.exports = "data:image/png;base64,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"
    },
    1938: function(t, e, a) {
        t.exports = a.p + "img/lucky-broker.352ec79e.png"
    },
    "278a": function(t, e, a) {
        t.exports = a.p + "img/kvakka.7279ed4d.png"
    },
    "2a89": function(t, e, a) {
        t.exports = a.p + "img/rucard.b857050d.png"
    },
    "454e": function(t, e, a) {},
    "483d": function(t, e, a) {
        "use strict";
        var s = a("a96e"),
            i = a.n(s);
        i.a
    },
    "55f0": function(t, e, a) {
        "use strict";
        var s = a("56bd"),
            i = a.n(s);
        i.a
    },
    "56bd": function(t, e, a) {},
    "56d7": function(t, e, a) {
        "use strict";
        a.r(e);
        a("e260"), a("e6cf"), a("cca6"), a("a79d");
        var s = a("2b0e"),
            i = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    attrs: {
                        id: "app"
                    }
                }, [a("div", {
                    staticClass: "row"
                }, [a("Header"), a("div", {
                    staticClass: "col m10 offset-m1"
                }, t._l(t.tabs, (function(e) {
                    return a("a", {
                        key: e,
                        class: ["tab-btn", {
                            active: t.selected === e.elem
                        }],
                        on: {
                            click: function(a) {
                                t.selected = e.elem
                            }
                        }
                    }, [t._v(t._s(e.name))])
                })), 0), a("Profession"), a(t.selected, {
                    tag: "component"
                }), a("SideMenu"), a("Footer")], 1)])
            },
            r = [],
            l = function() {
                var t = this,
                    e = t.$createElement;
                t._self._c;
                return t._m(0)
            },
            n = [function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "col s12 m10 offset-m1"
                }, [a("p", {
                    attrs: {
                        id: "myName"
                    }
                }, [t._v("БАЗЫЛЕВИЧ МИХАИЛ СЕРГЕЕВИЧ")])])
            }],
            c = (a("827c"), a("2877")),
            o = {},
            d = Object(c["a"])(o, l, n, !1, null, "2b99c040", null),
            v = d.exports,
            h = function() {
                var t = this,
                    e = t.$createElement;
                t._self._c;
                return t._m(0)
            },
            u = [function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "col s12 m10 offset-m1"
                }, [a("h1", [t._v("QA ENGINEER")])])
            }],
            f = (a("483d"), {}),
            m = Object(c["a"])(f, h, u, !1, null, "00c4ccd3", null),
            p = m.exports,
            C = function() {
                var t = this,
                    e = t.$createElement;
                t._self._c;
                return t._m(0)
            },
            g = [function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "col s12 m7 offset-m1"
                }, [a("div", {
                    staticClass: "card-panel grey lighten-5 z-depth-3"
                }, [a("h5", {
                    attrs: {
                        id: "headline"
                    }
                }, [t._v('Старший специалист по тестированию ПО - ООО "Элисофт"')]), a("div", {
                    attrs: {
                        id: "subheadline"
                    }
                }, [t._v("Ноябрь 2019 — По настоящее время")]), a("div", {
                    attrs: {
                        id: "info"
                    }
                }, [a("li", [t._v("Ручное тестирование мобильных, настольных и web-приложений")]), a("li", [t._v("Анализ и документирование дефектов, поиск причин")]), a("li", [t._v("Тестирование серверного API")]), a("li", [t._v("Поддержка тестовой документации")]), a("li", [t._v("Разворачивание окружений для тестирования")]), a("li", [t._v("Разработка собственных инструментов для тестирования")]), a("li", [t._v("Подготовка и перевод обучающих материалов для коллег")])])]), a("div", {
                    staticClass: "card-panel grey lighten-5 z-depth-3"
                }, [a("h5", {
                    attrs: {
                        id: "headline"
                    }
                }, [t._v('Инженер по тестированию ПО - ООО "Софт-Тест"')]), a("div", {
                    attrs: {
                        id: "subheadline"
                    }
                }, [t._v("Июнь 2019 — Ноябрь 2019")]), a("div", {
                    attrs: {
                        id: "info"
                    }
                }, [a("li", [t._v("Ручное тестирование")]), a("li", [t._v("Автоматизированное тестирование (Java+TestNG+Selenium)")]), a("li", [t._v("Написание тестовой документации и инструкций")]), a("li", [t._v("Тестирования мобильных приложений")]), a("li", [t._v("Практическое знакомство с SQL")]), a("li", [t._v("Работы с системами баг-трекинга и системами учета дефектов (Jira)")]), a("li", [t._v("Работа с инструментами управления процессом разработки (Git)")])])]), a("div", {
                    staticClass: "card-panel grey lighten-5 z-depth-3"
                }, [a("h5", {
                    attrs: {
                        id: "headline"
                    }
                }, [t._v('Разработчик настольных игр - ООО "Гага-Трейд"')]), a("div", {
                    attrs: {
                        id: "subheadline"
                    }
                }, [t._v("Август 2016 — июнь 2019")]), a("div", {
                    attrs: {
                        id: "info"
                    }
                }, [a("li", [t._v("Разработка игровых систем")]), a("li", [t._v("Работа с CorelDraw, Photoshop")]), a("li", [t._v("Работа с средой GoogleDocs")]), a("li", [t._v("Курирование игровых проектов")]), a("li", [t._v("Тестирование проектов сторонних разработчиков")])])]), a("div", {
                    staticClass: "card-panel grey lighten-5 z-depth-3"
                }, [a("h5", {
                    attrs: {
                        id: "headline"
                    }
                }, [t._v("Системный администратор - ИП Курилов")]), a("div", {
                    attrs: {
                        id: "subheadline"
                    }
                }, [t._v("Декабрь 2010 — июнь 2019")]), a("div", {
                    attrs: {
                        id: "info"
                    }
                }, [a("li", [t._v("Оптимизация среды 1С")]), a("li", [t._v("Настройка торгового оборудования магазинов и склада")]), a("li", [t._v("Системное администрирование розничной сети")]), a("li", [t._v("Техподдержка по телефону и TeamViewer")]), a("li", [t._v("Составление регламентов по работе с ПО и Аппаратным обеспечением")])])])])
            }],
            b = {},
            _ = Object(c["a"])(b, C, g, !1, null, null, null),
            k = _.exports,
            A = function() {
                var t = this,
                    e = t.$createElement;
                t._self._c;
                return t._m(0)
            },
            V = [function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "col s12 m7 offset-m1"
                }, [a("div", {
                    staticClass: "card-panel grey lighten-5 z-depth-3"
                }, [a("h5", {
                    attrs: {
                        id: "headline"
                    }
                }, [t._v("Курсы образовательной платформы Stepik")]), a("div", {
                    staticClass: "item"
                }, [a("i", {
                    staticClass: "material-icons"
                }, [t._v("computer")]), a("div", {
                    staticClass: "subheadline"
                }, [t._v("Anton Kholin")]), a("a", {
                    attrs: {
                        href: "https://stepik.org/cert/787508",
                        target: "_blank"
                    }
                }, [t._v("JavaScript for Beginners")])]), a("hr"), a("div", {
                    staticClass: "item"
                }, [a("i", {
                    staticClass: "material-icons"
                }, [t._v("computer")]), a("div", {
                    staticClass: "subheadline"
                }, [t._v("Aleksey Pogibelev, Юлия Лях")]), a("a", {
                    attrs: {
                        href: "https://stepik.org/cert/207430",
                        target: "_blank"
                    }
                }, [t._v("Автоматизация тестирования с помощью Selenium и Python")])]), a("hr"), a("div", {
                    staticClass: "item"
                }, [a("i", {
                    staticClass: "material-icons"
                }, [t._v("computer")]), a("div", {
                    staticClass: "subheadline"
                }, [t._v("Александр Мяснов, Иван Савин")]), a("a", {
                    attrs: {
                        href: "https://stepik.org/cert/222733",
                        target: "_blank"
                    }
                }, [t._v("Введение в базы данных")])]), a("hr"), a("div", {
                    staticClass: "item"
                }, [a("i", {
                    staticClass: "material-icons"
                }, [t._v("computer")]), a("div", {
                    staticClass: "subheadline"
                }, [t._v("Алексей Гуревич, Андрей Пржибельский")]), a("a", {
                    attrs: {
                        href: "https://stepik.org/cert/207450",
                        target: "_blank"
                    }
                }, [t._v("Введение в Linux")])]), a("hr"), a("div", {
                    staticClass: "item"
                }, [a("i", {
                    staticClass: "material-icons"
                }, [t._v("computer")]), a("div", {
                    staticClass: "subheadline"
                }, [t._v("Тимофей Бондарев, Павел Федотов")]), a("a", {
                    attrs: {
                        href: "https://stepik.org/cert/200680",
                        target: "_blank"
                    }
                }, [t._v("Программирование на Python")])]), a("hr"), a("div", {
                    staticClass: "item"
                }, [a("i", {
                    staticClass: "material-icons"
                }, [t._v("computer")]), a("div", {
                    staticClass: "subheadline"
                }, [t._v("Артем Глотов")]), a("a", {
                    attrs: {
                        href: "https://stepik.org/cert/195573",
                        target: "_blank"
                    }
                }, [t._v("JIRA: ведение задач на электронных досках")])]), a("hr"), a("div", {
                    staticClass: "item"
                }, [a("i", {
                    staticClass: "material-icons"
                }, [t._v("computer")]), a("div", {
                    staticClass: "subheadline"
                }, [t._v("Anton Kholin")]), a("a", {
                    attrs: {
                        href: "https://stepik.org/cert/194996",
                        target: "_blank"
                    }
                }, [t._v("Тестирование ПО: Базовый уровень")])])]), a("div", {
                    staticClass: "card-panel grey lighten-5 z-depth-3"
                }, [a("h5", {
                    attrs: {
                        id: "headline"
                    }
                }, [t._v("Список литературы")]), a("div", {
                    staticClass: "item"
                }, [a("i", {
                    staticClass: "material-icons"
                }, [t._v("book")]), a("div", {
                    staticClass: "subheadline"
                }, [t._v("Джанет Грегори и Лайза Криспин")]), a("a", {
                    attrs: {
                        href: "https://www.ozon.ru/context/detail/id/151531705/",
                        target: "_blank"
                    }
                }, [t._v('"Agile-тестирование. Обучающий курс для всей команды”')])]), a("hr"), a("div", {
                    staticClass: "item"
                }, [a("i", {
                    staticClass: "material-icons"
                }, [t._v("book")]), a("div", {
                    staticClass: "subheadline"
                }, [t._v("Гленфорд Майерс, Том Баджетт, Кори Сандлер")]), a("a", {
                    attrs: {
                        href: "https://www.ozon.ru/context/detail/id/151531705/",
                        target: "_blank"
                    }
                }, [t._v('"Искусство тестирования программ”')])]), a("hr"), a("div", {
                    staticClass: "item"
                }, [a("i", {
                    staticClass: "material-icons"
                }, [t._v("book")]), a("div", {
                    staticClass: "subheadline"
                }, [t._v("Тобиас Клейн")]), a("a", {
                    attrs: {
                        href: "https://www.bookvoed.ru/book?id=6245240/",
                        target: "_blank"
                    }
                }, [t._v('"Дневник охотника за ошибками. Путешествие через джунгли проблем безопасности программного обеспечения”')])]), a("hr"), a("div", {
                    staticClass: "item"
                }, [a("i", {
                    staticClass: "material-icons"
                }, [t._v("book")]), a("div", {
                    staticClass: "subheadline"
                }, [t._v("Рекс Блэк")]), a("a", {
                    attrs: {
                        href: "https://www.chitai-gorod.ru/catalog/book/1031987/",
                        target: "_blank"
                    }
                }, [t._v('"Ключевые процессы тестирования”')])]), a("hr"), a("div", {
                    staticClass: "item"
                }, [a("i", {
                    staticClass: "material-icons"
                }, [t._v("book")]), a("div", {
                    staticClass: "subheadline"
                }, [t._v("Роман Савин")]), a("a", {
                    attrs: {
                        href: "https://www.ozon.ru/context/detail/id/3128208/",
                        target: "_blank"
                    }
                }, [t._v("“Тестирование Дот Ком”")])]), a("hr"), a("div", {
                    staticClass: "item"
                }, [a("i", {
                    staticClass: "material-icons"
                }, [t._v("book")]), a("div", {
                    staticClass: "subheadline"
                }, [t._v("Кори Альтхофф")]), a("a", {
                    attrs: {
                        href: "https://www.labirint.ru/books/638955/",
                        target: "_blank"
                    }
                }, [t._v('"Сам себе программист"')])]), a("hr"), a("div", {
                    staticClass: "item"
                }, [a("i", {
                    staticClass: "material-icons"
                }, [t._v("book")]), a("div", {
                    staticClass: "subheadline"
                }, [t._v("Святослав Куликов")]), a("a", {
                    attrs: {
                        href: "https://svyatoslav.biz/software_testing_book/",
                        target: "_blank"
                    }
                }, [t._v('"Тестирование программного обеспечения. Базовый курс."')])]), a("hr"), a("div", {
                    staticClass: "item"
                }, [a("i", {
                    staticClass: "material-icons"
                }, [t._v("book")]), a("div", {
                    staticClass: "subheadline"
                }, [t._v("Александр Кенин")]), a("a", {
                    attrs: {
                        href: "https://www.ozon.ru/context/detail/id/4851239/",
                        target: "_blank"
                    }
                }, [t._v('"Практическое руководство системного администратора"')])]), a("hr"), a("div", {
                    staticClass: "item"
                }, [a("i", {
                    staticClass: "material-icons"
                }, [t._v("book")]), a("div", {
                    staticClass: "subheadline"
                }, [t._v("Джеймс Уиттакер")]), a("a", {
                    attrs: {
                        href: "https://www.labirint.ru/books/421532/",
                        target: "_blank"
                    }
                }, [t._v('"Как тестируют в Google"')])])])])
            }],
            S = (a("ab29"), {}),
            q = Object(c["a"])(S, A, V, !1, null, "13aa8e7c", null),
            E = q.exports,
            K = function() {
                var t = this,
                    e = t.$createElement;
                t._self._c;
                return t._m(0)
            },
            w = [function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("div", {
                    staticClass: "col s12 m7 offset-m1"
                }, [s("div", {
                    staticClass: "card-panel grey lighten-5 z-depth-3"
                }, [s("div", {
                    staticClass: "block-image"
                }, [s("a", {
                    attrs: {
                        href: "https://baltbet.ru/",
                        target: "_blank"
                    }
                }, [s("img", {
                    attrs: {
                        src: a("8add"),
                        alt: "baltbet"
                    }
                })])]), s("div", {
                    staticClass: "block-image"
                }, [s("a", {
                    attrs: {
                        href: "https://kvakka.com/",
                        target: "_blank"
                    }
                }, [s("img", {
                    attrs: {
                        src: a("278a"),
                        alt: "kvakka"
                    }
                })])]), s("div", {
                    staticClass: "block-image"
                }, [s("a", {
                    attrs: {
                        href: "https://softest.pro/#/",
                        target: "_blank"
                    }
                }, [s("img", {
                    attrs: {
                        src: a("7f11"),
                        alt: "soft-test"
                    }
                })])]), s("div", {
                    staticClass: "block-image"
                }, [s("a", {
                    attrs: {
                        href: "http://www.rucard.ru/",
                        target: "_blank"
                    }
                }, [s("img", {
                    attrs: {
                        src: a("2a89"),
                        alt: "rucard"
                    }
                })])]), s("div", {
                    staticClass: "block-image"
                }, [s("a", {
                    attrs: {
                        href: "https://gekkoin.com/",
                        target: "_blank"
                    }
                }, [s("img", {
                    attrs: {
                        src: a("db8f"),
                        alt: "gekkoin"
                    }
                })])]), s("div", {
                    staticClass: "block-image"
                }, [s("a", {
                    attrs: {
                        href: "https://www.facebook.com/quizdomchallenge",
                        target: "_blank"
                    }
                }, [s("img", {
                    attrs: {
                        src: a("b9ec"),
                        alt: "quizdome"
                    }
                })])]), s("div", {
                    staticClass: "block-image"
                }, [s("a", {
                    attrs: {
                        href: "https://rusoft-company.ru/",
                        target: "_blank"
                    }
                }, [s("img", {
                    attrs: {
                        src: a("79db"),
                        alt: "ru-soft"
                    }
                })])]), s("div", {
                    staticClass: "block-image"
                }, [s("a", {
                    attrs: {
                        href: "https://binevo.com/",
                        target: "_blank"
                    }
                }, [s("img", {
                    attrs: {
                        src: a("fd4d"),
                        alt: "binevo"
                    }
                })])]), s("div", {
                    staticClass: "block-image"
                }, [s("a", {
                    attrs: {
                        href: "https://luckybroker.game/",
                        target: "_blank"
                    }
                }, [s("img", {
                    attrs: {
                        src: a("1938"),
                        alt: "lucckybroker"
                    }
                })])]), s("div", {
                    staticClass: "block-image"
                }, [s("a", {
                    attrs: {
                        href: "https://galleon.games/",
                        target: "_blank"
                    }
                }, [s("img", {
                    attrs: {
                        src: a("d390"),
                        alt: "galleon"
                    }
                })])]), s("div", {
                    staticClass: "block-image"
                }, [s("a", {
                    attrs: {
                        href: "https://hive.rusoft.pro/",
                        target: "_blank"
                    }
                }, [s("img", {
                    attrs: {
                        src: a("189a"),
                        alt: "hive"
                    }
                })])])])])
            }],
            R = (a("f93b"), {}),
            U = Object(c["a"])(R, K, w, !1, null, "562c0c5e", null),
            y = U.exports,
            j = function() {
                var t = this,
                    e = t.$createElement;
                t._self._c;
                return t._m(0)
            },
            O = [function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "col s12 m7 offset-m1"
                }, [a("div", {
                    staticClass: "card-panel grey lighten-5 z-depth-3"
                }, [a("a", {
                    attrs: {
                        href: "https://github.com/ssbsweet/resume-site-dev"
                    }
                }, [t._v("Сайт-резюме")])])])
            }],
            F = {},
            x = Object(c["a"])(F, j, O, !1, null, null, null),
            z = x.exports,
            Q = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "card-panel grey lighten-5 z-depth-3 col s12 m3"
                }, [a("div", {
                    staticClass: "section-headline"
                }, [t._v("ЗНАНИЯ")]), a("div", {
                    staticClass: "progress-first"
                }, [t._v("Atlassian products")]), t._m(0), a("div", [t._v("Java")]), t._m(1), a("div", [t._v("Python")]), t._m(2), a("div", [t._v("WebApi")]), t._m(3), a("div", [t._v("SQL")]), t._m(4), a("div", [t._v("Selenium")]), t._m(5), a("div", [t._v("HTML+CSS+JS")]), t._m(6), a("div", {
                    staticClass: "item"
                }, [a("i", {
                    staticClass: "material-icons"
                }, [t._v("calendar_today")]), a("a", [t._v(t._s((new Date).getFullYear() - 1989) + " год")])]), t._m(7), t._m(8), t._m(9), t._m(10)])
            },
            H = [function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "progress"
                }, [a("div", {
                    staticClass: "determinate",
                    staticStyle: {
                        width: "90%"
                    }
                })])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "progress"
                }, [a("div", {
                    staticClass: "determinate",
                    staticStyle: {
                        width: "55%"
                    }
                })])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "progress"
                }, [a("div", {
                    staticClass: "determinate",
                    staticStyle: {
                        width: "50%"
                    }
                })])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "progress"
                }, [a("div", {
                    staticClass: "determinate",
                    staticStyle: {
                        width: "75%"
                    }
                })])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "progress"
                }, [a("div", {
                    staticClass: "determinate",
                    staticStyle: {
                        width: "78%"
                    }
                })])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "progress"
                }, [a("div", {
                    staticClass: "determinate",
                    staticStyle: {
                        width: "70%"
                    }
                })])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "progress"
                }, [a("div", {
                    staticClass: "determinate",
                    staticStyle: {
                        width: "60%"
                    }
                })])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "item"
                }, [a("i", {
                    staticClass: "material-icons"
                }, [t._v("location_city")]), a("a", {
                    attrs: {
                        href: "https://yandex.ru/maps/-/CGDcMRI~"
                    }
                }, [t._v("Россия г.Санкт-Петербург")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "item"
                }, [a("i", {
                    staticClass: "material-icons"
                }, [t._v("phone")]), a("a", {
                    attrs: {
                        href: "tel:+79043320230"
                    }
                }, [t._v("+79043320230")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "item"
                }, [a("i", {
                    staticClass: "material-icons"
                }, [t._v("email")]), a("a", {
                    attrs: {
                        href: "mailto:ssbsweet56@gmail.com"
                    }
                }, [t._v("ssbsweet56@gmail.com")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "item"
                }, [a("i", {
                    staticClass: "material-icons"
                }, [t._v("storage")]), a("a", {
                    attrs: {
                        href: "https://github.com/ssbsweet?tab=repositories",
                        target: "_blank"
                    }
                }, [t._v("GitHub")])])
            }],
            J = (a("55f0"), {}),
            Z = Object(c["a"])(J, Q, H, !1, null, "6d0a76f3", null),
            B = Z.exports,
            W = function() {
                var t = this,
                    e = t.$createElement;
                t._self._c;
                return t._m(0)
            },
            M = [function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("footer", {
                    staticClass: "page-footer col s12"
                }, [a("div", {
                    staticClass: "container"
                }, [t._v("Made with love on Vue.JS and Materialize")])])
            }],
            P = {},
            X = Object(c["a"])(P, W, M, !1, null, null, null),
            Y = X.exports,
            D = {
                name: "App",
                components: {
                    Header: v,
                    Profession: p,
                    SideMenu: B,
                    CardsBlock: k,
                    CardsBlock2: E,
                    CardsBlock3: y,
                    CardsBlock4: z,
                    Footer: Y
                },
                data: function() {
                    return {
                        tabs: [{
                            name: "ОПЫТ",
                            elem: "CardsBlock"
                        }, {
                            name: "ОБРАЗОВАНИЕ",
                            elem: "CardsBlock2"
                        }, {
                            name: "ПОРТФОЛИО",
                            elem: "CardsBlock3"
                        }, {
                            name: "GITHUB",
                            elem: "CardsBlock4"
                        }],
                        selected: "CardsBlock"
                    }
                }
            },
            I = D,
            L = (a("034f"), Object(c["a"])(I, i, r, !1, null, null, null)),
            G = L.exports;
        s["a"].config.productionTip = !1, new s["a"]({
            render: function(t) {
                return t(G)
            }
        }).$mount("#app")
    },
    "79db": function(t, e, a) {
        t.exports = a.p + "img/ru-soft.40af675f.png"
    },
    "7f11": function(t, e, a) {
        t.exports = a.p + "img/soft-test.d8c2bacd.png"
    },
    "827c": function(t, e, a) {
        "use strict";
        var s = a("9a97"),
            i = a.n(s);
        i.a
    },
    "85ec": function(t, e, a) {},
    "8add": function(t, e, a) {
        t.exports = a.p + "img/baltbet.cc40ea17.png"
    },
    "9a97": function(t, e, a) {},
    a96e: function(t, e, a) {},
    ab29: function(t, e, a) {
        "use strict";
        var s = a("454e"),
            i = a.n(s);
        i.a
    },
    b9ec: function(t, e, a) {
        t.exports = a.p + "img/quizdome-chalenge.d78248a6.png"
    },
    d390: function(t, e) {
        t.exports = "data:image/png;base64,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"
    },
    db8f: function(t, e, a) {
        t.exports = a.p + "img/gekkoin.741c35e0.png"
    },
    f60c: function(t, e, a) {},
    f93b: function(t, e, a) {
        "use strict";
        var s = a("f60c"),
            i = a.n(s);
        i.a
    },
    fd4d: function(t, e, a) {
        t.exports = a.p + "img/binevo.9e43d29d.png"
    }
});
//# sourceMappingURL=app.47944920.js.map
