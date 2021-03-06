! function($) {
    "use strict";
    var WMWysiwygEditor = function(e, t) {
        this.options = t, this.$element = $(e), this.$element.addClass("wmwysiwyg-container"), this.$element_contents = this.$element.html(), this.$element.attr("data-height", this.options.height), this.$element.addClass(this.options["class"]), this.$editor = $("<div/>", {
            "class": "wmwysiwyg-editor"
        }), this.$editor.attr("contenteditable", !0), this.$toolbar = $("<div/>", {
            "class": "wmwysiwyg-toolbar"
        }), "" != this.options.toolbar_class && this.$toolbar.addClass(this.options.toolbar_class), this.btnsDef = {
            source: {
                "function": "showSource",
                icon: "code",
                title: "Source Code",
                type: "button"
            },
            fullScreen: {
                "function": "fullScreen",
                icon: "window-maximize",
                title: "Toogle between Full Screen and Restored size",
                type: "button"
            },
            undo: {
                command: "undo",
                icon: "undo",
                title: "Undo",
                type: "button"
            },
            redo: {
                command: "redo",
                value: "",
                icon: "repeat",
                title: "Redo",
                type: "button"
            },
            bold: {
                command: "bold",
                icon: "bold",
                title: "Bold",
                type: "button",
                forcecss: !0
            },
            italic: {
                command: "italic",
                icon: "italic",
                title: "Italic",
                type: "button",
                forcecss: !0
            },
            underline: {
                command: "underline",
                icon: "underline",
                title: "Underline",
                type: "button",
                forcecss: !0
            },
            strikeThrough: {
                command: "strikeThrough",
                icon: "strikethrough",
                title: "Strike Through",
                type: "button",
                forcecss: !0
            },
            indent: {
                command: "indent",
                icon: "indent",
                title: "Indent",
                type: "button"
            },
            outdent: {
                command: "outdent",
                icon: "outdent",
                title: "Outdent",
                type: "button"
            },
            foreColor: {
                command: "foreColor",
                icon: "tint",
                title: "Font Color",
                type: "colorPicker",
                forcecss: !0
            },
            backColor: {
                command: "backColor",
                icon: "paint-brush",
                title: "Font Color",
                type: "colorPicker",
                forcecss: !0
            },
            subscript: {
                command: "subscript",
                icon: "subscript",
                title: "Subscript",
                type: "button"
            },
            superscript: {
                command: "superscript",
                icon: "superscript",
                title: "Superscript",
                type: "button"
            },
            ul: {
                command: "insertUnorderedList",
                icon: "list-ul",
                title: "Unordered List",
                type: "button"
            },
            ol: {
                command: "insertOrderedList",
                icon: "list-ol",
                title: "Ordered List",
                type: "button"
            },
            hr: {
                command: "insertHorizontalRule",
                icon: "minus",
                title: "Horizontal Line",
                type: "button"
            },
            textAlignment: {
                dropdown: ["textLeft", "textCenter", "textRight", "textFull"],
                icon: "align-left",
                type: "dropdown",
                title: "Text Alignment",
                defs: {
                    textLeft: {
                        command: "justifyLeft",
                        content: "Left",
                        forcecss: !0
                    },
                    textCenter: {
                        command: "justifyCenter",
                        content: "Center",
                        forcecss: !0
                    },
                    textRight: {
                        command: "justifyRight",
                        content: "Right",
                        forcecss: !0
                    },
                    textFull: {
                        command: "justifyFull",
                        content: "Justify",
                        forcecss: !0
                    }
                }
            },
            formatting: {
                dropdown: ["p", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "pre"],
                icon: "paragraph",
                type: "dropdown",
                title: "Formating",
                defs: {
                    p: {
                        command: "formatBlock",
                        value: "p",
                        content: "Paragraph"
                    },
                    blockquote: {
                        command: "formatBlock",
                        value: "blockquote",
                        content: "Blockquote"
                    },
                    pre: {
                        command: "formatBlock",
                        value: "pre",
                        content: "Code Block"
                    },
                    h1: {
                        command: "formatBlock",
                        value: "h1",
                        content: "Header 1"
                    },
                    h2: {
                        command: "formatBlock",
                        value: "h2",
                        content: "Header 2"
                    },
                    h3: {
                        command: "formatBlock",
                        value: "h3",
                        content: "Header 3"
                    },
                    h4: {
                        command: "formatBlock",
                        value: "h4",
                        content: "Header 4"
                    },
                    h5: {
                        command: "formatBlock",
                        value: "h5",
                        content: "Header 5"
                    },
                    h6: {
                        command: "formatBlock",
                        value: "h6",
                        content: "Header 6"
                    }
                }
            },
            fontSize: {
                dropdown: ["12px", "16px", "24px", "36px", "48px", "60px", "72px", "84px", "96px", "108px"],
                icon: "text-height",
                type: "dropdown",
                title: "Font Size",
                defs: {
                    "12px": {
                        command: "fontSize",
                        value: "12px",
                        content: "12px"
                    },
                    "16px": {
                        command: "fontSize",
                        value: "16px",
                        content: "16px"
                    },
                    "24px": {
                        command: "fontSize",
                        value: "24px",
                        content: "24px"
                    },
                    "36px": {
                        command: "fontSize",
                        value: "36px",
                        content: "36px"
                    },
                    "48px": {
                        command: "fontSize",
                        value: "48px",
                        content: "48px"
                    },
                    "60px": {
                        command: "fontSize",
                        value: "60px",
                        content: "60px"
                    },
                    "72px": {
                        command: "fontSize",
                        value: "72px",
                        content: "72px"
                    },
                    "84px": {
                        command: "fontSize",
                        value: "84px",
                        content: "84px"
                    },
                    "96px": {
                        command: "fontSize",
                        value: "96px",
                        content: "96px"
                    },
                    "108px": {
                        command: "fontSize",
                        value: "108px",
                        content: "108px"
                    }
                }
            },
            link: {
                dropdown: ["createLink", "unlink"],
                icon: "link",
                type: "dropdown",
                title: "Hyper Link",
                defs: {
                    createLink: {
                        "function": "createLink",
                        content: "Create Link"
                    },
                    unlink: {
                        command: "unlink",
                        content: "Unlink"
                    }
                }
            },
            insertImage: {
                "function": "insertImage",
                icon: "image",
                title: "Insert Image",
                type: "button"
            },
            createTable: {
                "function": "createTable",
                value: "",
                icon: "table",
                title: "Create Table",
                type: "button"
            },
            removeFormat: {
                command: "removeFormat",
                icon: "eraser",
                title: "Remove Format/Style",
                type: "button"
            }
        };
        var a = this.btnsDef;
        $.each(this.options.plugins, function(e, t) {
            $.extend(a, t.btnsDef)
        })
    };
    WMWysiwygEditor.prototype = {
        constructor: WMWysiwygEditor,
        init: function(e) {
            this.$editor.append(this.$element_contents), this.generateToolbar(), this.$element.html(this.$toolbar).append(this.$editor), this.$element.find('[data-tooltip="active"]').tooltip({
                placement: "bottom",
                container: "body",
                trigger: "hover",
                animation: !1
            });
            var t = this.$element.attr("data-height");
            if (t > 100) {
                var a = this.$toolbar.outerHeight();
                this.$editor.css("height", t - a + "px")
            }
            document.execCommand("defaultParagraphSeparator", !1, "p"), document.execCommand("enableInlineTableEditing", !1, !1)
        },
        generateToolbar: function() {
            var e = this,
                t = this.$toolbar,
                a = this.options.btns,
                n = this.btnsDef;
            $.each(a, function(o, i) {
                if ("object" == typeof i) {
                    var d = $("<div/>", {
                        "class": "btn-group"
                    });
                    $.each(a[o], function(t, a) {
                        var o = n[a];
                        if ("button" == o.type) {
                            var i = e.createBtn(o);
                            d.append(i)
                        } else if ("dropdown" == o.type) {
                            var l = e.createDropdown(o);
                            d.append(l)
                        } else if ("colorPicker" == o.type) {
                            var c = e.createColorPicker(o);
                            d.append(c)
                        }
                    }), t.append(d)
                } else if ("string" == typeof i) {
                    var l = a[o],
                        c = n[l];
                    if ("button" == c.type) {
                        var r = e.createBtn(c);
                        t.append(r)
                    } else if ("dropdown" == c.type) {
                        var s = e.createDropdown(c);
                        t.append(s)
                    } else if ("colorPicker" == c.type) {
                        var f = e.createColorPicker(c);
                        t.append(f)
                    }
                }
            })
        },
        createBtn: function(e) {
            var t = this,
                a = this.options.toolbar_btn_size,
                n = this.options.toolbar_btn_class,
                o = this.options.bootstrap_v,
                i = $("<button/>", {
                    "class": "btn",
                    title: e.title,
                    html: '<i class="fa fa-' + e.icon + '"></i>',
                    "data-tooltip": "active",
                    click: function(e) {
                        e.preventDefault()
                    },
                    mousedown: function(e) {
                        e.preventDefault(), t.command($(this))
                    }
                });
            return "function" in e ? i.attr("data-function", e["function"]) : "extend" in e ? i.attr("data-extend", e.extend) : "command" in e && (i.attr("data-command", e.command), "forcecss" in e && i.attr("data-forcecss", e.forcecss)), "value" in e && i.attr("data-value", e.value), "" == n && (n = 3 == o ? "btn-default" : "btn-secondary"), i.addClass(n), "sm" == a ? a = "btn-sm" : "xs" == a ? a = "btn-xs" : "lg" == a && (a = "btn-lg"), i.addClass(a), i
        },
        createDropdown: function(e) {
            var t = this,
                a = this.options.toolbar_btn_size,
                n = this.options.toolbar_btn_class,
                o = this.options.bootstrap_v,
                i = e.dropdown,
                d = e.defs;
            "" == n && (n = 3 == o ? "btn-default" : "btn-secondary"), "sm" == a ? a = "btn-group-sm" : "xs" == a ? a = "btn-group-xs" : "lg" == a && (a = "btn-group-lg");
            var l = $("<div/>", {
                "class": "btn-group"
            });
            l.addClass(a);
            var c = $("<button/>", {
                "class": "btn dropdown-toggle",
                type: "button",
                "data-tooltip": "active",
                "data-toggle": "dropdown",
                title: e.title,
                html: '<i class="fa fa-' + e.icon + '"></i>'
            });
            if (3 == o && c.append(' <span class="caret"></span>'), c.addClass(n), 3 == o) var r = $("<ul/>");
            else var r = $("<div/>");
            return r.addClass("dropdown-menu dropdown-menu-right"), $.each(i, function(e, a) {
                var n = d[a],
                    i = $("<a/>", {
                        href: "#",
                        html: n.content,
                        mousedown: function() {
                            t.command($(this))
                        },
                        click: function(e) {
                            e.preventDefault()
                        }
                    });
                if (3 != o && i.addClass("dropdown-item"), "function" in n ? i.attr("data-function", n["function"]) : "extend" in n ? i.attr("data-extend", n.extend) : "command" in n && (i.attr("data-command", n.command), "forcecss" in n && i.attr("data-forcecss", n.forcecss)), "value" in n && i.attr("data-value", n.value), 3 == o) {
                    var l = $("<li/>");
                    l.append(i), r.append(l)
                } else r.append(i)
            }), l.append(c).append(r), l
        },
        createColorPicker: function(e) {
            var t = this,
                a = this.options.paletteColors,
                n = this.options.toolbar_btn_size,
                o = this.options.toolbar_btn_class,
                i = this.options.bootstrap_v;
            "" == o && (o = 3 == i ? "btn-default" : "btn-secondary"), "sm" == n ? n = "btn-group-sm" : "xs" == n ? n = "btn-group-xs" : "lg" == n && (n = "btn-group-lg");
            var d = $("<div/>", {
                "class": "btn-group"
            });
            d.addClass(n);
            var l = $("<button/>", {
                "class": "btn dropdown-toggle",
                type: "button",
                "data-toggle": "dropdown",
                "data-tooltip": "active",
                title: e.title,
                html: '<i class="fa fa-' + e.icon + '"></i>'
            });
            if ("3" == i && l.append(' <span class="caret"></span>'), l.addClass(o), 3 == i) var c = $("<ul/>");
            else var c = $("<div/>");
            return c.addClass("dropdown-menu dropdown-menu-right wmwysiwyg-dropdown-colorpicker"), $.each(a, function(a, n) {
                var o = $("<button/>", {
                    "class": "wmwysiwyg-color-palette",
                    style: "background-color:" + n + ";",
                    type: "button",
                    "data-value": n,
                    mousedown: function() {
                        t.command($(this))
                    }
                });
                "function" in e ? o.attr("data-function", e["function"]) : "extend" in e ? o.attr("data-extend", e.extend) : "command" in e && (o.attr("data-command", e.command), "forcecss" in e && o.attr("data-forcecss", e.forcecss)), "value" in e && o.attr("data-value", e.value), c.append(o)
            }), d.append(l).append(c), d
        },
        command: function(btn) {
            var $this = this,
                $clicked_btn = $(btn);
            this.$editor.focus();
            var selectedText = this.getSelectedText();
            if ($clicked_btn.data("command")) {
                var cmd = $clicked_btn.data("command"),
                    css = $clicked_btn.data("forcecss");
                if (1 == css && document.execCommand("styleWithCSS", null, !0), "formatBlock" == cmd || "foreColor" == cmd || "backColor" == cmd) {
                    var value = $clicked_btn.data("value");
                    document.execCommand(cmd, !1, value)
                } else if ("indent" == cmd || "outdent" == cmd) {
                    var element = document.getSelection().anchorNode;
                    if ($(element).hasClass("wmwysiwyg-editor") || $(element).parent().hasClass("wmwysiwyg-editor")) return;
                    var element = document.getSelection().focusNode.parentNode;
                    if ($(element).is("li")) return void document.execCommand(cmd, !1, null);
                    var current_padding = $(element).css("padding-left"),
                        new_padding = 0;
                    "indent" == cmd ? new_padding = parseInt(current_padding) + 30 : (new_padding = parseInt(current_padding) - 30, 1 > new_padding && (new_padding = "")), $(element).css("padding-left", new_padding)
                } else if ("fontSize" == cmd) {
                    var value = $clicked_btn.data("value");
                    if ("" != selectedText) {
                        document.execCommand("fontSize", !1, "1");
                        var fontSizeTag = $("<span/>", {
                            html: $("font[size]").html()
                        }).css("font-size", value);
                        $("font[size]").replaceWith(fontSizeTag)
                    }
                } else document.execCommand(cmd, !1, !1)
            } else if ($clicked_btn.data("function")) {
                var fn = $clicked_btn.data("function");
                $this[fn]($clicked_btn)
            } else if ($clicked_btn.data("extend")) {
                var $this = this,
                    ex_fn = $clicked_btn.data("extend");
                ex_fn.indexOf("(") >= 0 && ex_fn.indexOf(")") >= 0 ? eval(ex_fn) : eval(ex_fn)($this)
            }
        },
        createModal: function(e, t, a, n) {
            var o = this.createModalId(e),
                i = this.options.bootstrap_v,
                d = $("<div/>", {
                    "class": "modal fade",
                    "data-backdrop": "static",
                    id: o
                }),
                l = $("<div/>", {
                    "class": "modal-dialog "
                });
            null != n && l.addClass(n);
            var c = $("<form/>", {
                    "class": "modal-content",
                    enctype: "multipart/form-data"
                }),
                r = $("<div/>", {
                    "class": "modal-header"
                }),
                s = $("<h5/>", {
                    "class": "modal-title",
                    text: e
                }),
                f = $("<button/>", {
                    type: "button",
                    "class": "close",
                    html: "<span>&times;</span>",
                    "data-modal-id": "#" + o,
                    click: function() {
                        var e = $(this).data("modal-id");
                        $(e).modal("hide"), $(e).on("hidden.bs.modal", function() {
                            $(this).removeData("bs.modal").remove()
                        })
                    }
                });
            3 == i ? (f.find("span").addClass("close"), s.append(f), r.append(s)) : r.append(s).append(f);
            var m = $("<div/>", {
                "class": "modal-body"
            });
            $.each(t, function(e, t) {
                var a = $("<div/>", {
                        "class": "form-group"
                    }),
                    n = $("<label/>", {
                        "for": t.id,
                        html: t.label
                    });
                if ("input" == t.field) var o = $("<input/>", {
                    type: t.type,
                    name: t.name,
                    id: t.id,
                    value: t.value,
                    "class": "form-control",
                    required: t.required
                });
                else if ("select" == t.field) {
                    var o = $("<select/>", {
                            name: t.name,
                            id: t.id,
                            "class": "form-control",
                            required: t.required
                        }),
                        i = t.options;
                    $.each(i, function(e, t) {
                        var a = $("<option/>", {
                            value: t.value,
                            text: t.text
                        });
                        o.append(a)
                    })
                } else if ("textarea" == t.field) var o = $("<textarea/>", {
                    name: t.name,
                    id: t.id,
                    html: t.value,
                    "class": "form-control",
                    rows: t.rows
                });
                a.append(n).append(o), m.append(a)
            });
            var p = $("<div/>", {
                    "class": "modal-footer"
                }),
                u = $("<button/>", {
                    "class": "btn btn-primary",
                    text: "Submit",
                    type: "submit",
                    "data-modal-id": "#" + o,
                    click: function(e) {
                        e.preventDefault();
                        var t = $(this).data("modal-id"),
                            n = $(t).find("form").serializeArray();
                        a(n), $(t).modal("hide"), $(t).on("hidden.bs.modal", function() {
                            $(this).removeData("bs.modal").remove()
                        })
                    }
                }),
                b = $("<button/>", {
                    "class": "btn",
                    text: "Cancel",
                    type: "button",
                    "data-modal-id": "#" + o,
                    click: function() {
                        var e = $(this).data("modal-id");
                        $(e).modal("hide"), $(e).on("hidden.bs.modal", function() {
                            $(this).removeData("bs.modal").remove()
                        })
                    }
                });
            3 == i ? b.addClass("btn-default") : b.addClass("btn-secondary"), p.append(b).append(u), c.append(r).append(m).append(p), l.append(c), d.append(l), $("body").append(d), d.modal("show");
            var h = this.getHighestZindex();
            $(".modal-backdrop").css("z-index", h);
            var h = this.getHighestZindex();
            d.css("z-index", h + 1)
        },
        createModalId: function(e) {
            return e = e.replace(/[^a-zA-Z0-9\s]/g, ""), e = e.toLowerCase(), e = e.replace(/\s/g, "-"), e = e + "-" + (Math.floor(9e4 * Math.random()) + 1e4)
        },
        getSelectedText: function() {
            var e = "";
            return window.getSelection ? e = window.getSelection().toString() : document.selection && "Control" != document.selection.type && (e = document.selection.createRange().text), e
        },
        pasteHtmlAtCaret: function(e) {
            var t, a;
            if (window.getSelection) {
                if (t = window.getSelection(), t.getRangeAt && t.rangeCount) {
                    a = t.getRangeAt(0), a.deleteContents();
                    var n = document.createElement("div");
                    n.innerHTML = e;
                    for (var o, i, d = document.createDocumentFragment(); o = n.firstChild;) i = d.appendChild(o);
                    a.insertNode(d), i && (a = a.cloneRange(), a.setStartAfter(i), a.collapse(!0), t.removeAllRanges(), t.addRange(a))
                }
            } else document.selection && "Control" != document.selection.type && document.selection.createRange().pasteHTML(e)
        },
        createPlaceholder: function() {
            var e = this.getSelectedText();
            "" == e && this.$editor.focus(), this.$editor.find("#wmwysiwyg-placeholder").length > 0 && this.$editor.find("#wmwysiwyg-placeholder").remove(), this.pasteHtmlAtCaret('<span id="wmwysiwyg-placeholder">' + e + "</span>")
        },
        replacePlaceholder: function(e) {
            var t = this.$editor;
            $(t).find("#wmwysiwyg-placeholder").replaceWith(e)
        },
        getHighestZindex: function() {
            var e = Math.max.apply(null, $.map($("body *"), function(e, t) {
                return parseInt($(e).css("z-index")) || 1
            }));
            return e
        },
        getContents: function() {
            var e = this.$editor,
                t = $(e).html();
            return t
        },
        setContents: function(e) {
            var t = this.$editor;
            $(t).html(e)
        },
        showSource: function() {
            var e = this,
                t = [{
                    label: "Source",
                    field: "textarea",
                    name: "wmwysiwyg-source",
                    id: "wmwysiwyg-source",
                    value: e.getContents(),
                    rows: 20
                }],
                a = function(t) {
                    var a = t[0].value;
                    e.setContents(a)
                };
            e.createModal("Source Code", t, a, "modal-lg")
        },
        fullScreen: function(e) {
            var t = this;
            $("body").toggleClass("wmwysiwyg-fullscreen-body"), t.$element.toggleClass("wmwysiwyg-fullscreen"), e.find("i").toggleClass("fa-window-restore fa-window-maximize");
            var a = t.getHighestZindex(),
                n = t.$toolbar.outerHeight(),
                o = t.$element.attr("data-height");
            t.$element.hasClass("wmwysiwyg-fullscreen") ? (t.$element.css({
                "z-index": a
            }), t.$editor.css("height", "calc(100vh - " + n + "px)")) : (t.$element.css({
                "z-index": "auto"
            }), o > 100 ? t.$editor.css("height", o - n + "px") : t.$editor.css("height", "auto"))
        },
        createLink: function(e) {
            var t = this,
                a = t.getSelectedText();
            t.createPlaceholder();
            var n = [{
                    label: "Text",
                    field: "input",
                    type: "text",
                    name: "wmwysiwyg-createLink-text",
                    id: "wmwysiwyg-createLink-text",
                    value: a,
                    required: !0
                }, {
                    label: "URL <small>Include <i>http(s)</i></small>",
                    field: "input",
                    type: "url",
                    name: "wmwysiwyg-createLink-url",
                    id: "wmwysiwyg-createLink-url",
                    value: "http://",
                    required: !0
                }, {
                    label: "Open in",
                    field: "select",
                    type: "",
                    name: "wmwysiwyg-createLink-target",
                    id: "wmwysiwyg-createLink-target",
                    options: [{
                        text: "Same Tab",
                        value: "_self"
                    }, {
                        text: "New Tab",
                        value: "_blank"
                    }],
                    required: !0
                }],
                o = function(e) {
                    var a = e[0].value,
                        n = e[1].value,
                        o = e[2].value,
                        i = $("<a/>", {
                            href: n,
                            target: o,
                            text: a
                        });
                    t.replacePlaceholder(i)
                };
            t.createModal("Create Link", n, o, "modal-sm")
        },
        insertImage: function(e) {
            var t = this;
            t.createPlaceholder();
            var a = [{
                    label: "URL <small>Include <i>http(s)</i></small>",
                    field: "input",
                    type: "url",
                    name: "wmwysiwyg-insertImage-url",
                    id: "wmwysiwyg-insertImage-url",
                    value: "http://",
                    required: !0
                }, {
                    label: "Alt",
                    field: "input",
                    type: "text",
                    name: "wmwysiwyg-insertImage-alt",
                    id: "wmwysiwyg-insertImage-alt",
                    value: "",
                    required: !0
                }, {
                    label: "Width <small>Include <b>px/%</b></small>",
                    field: "input",
                    type: "text",
                    name: "wmwysiwyg-insertImage-width",
                    id: "wmwysiwyg-insertImage-width",
                    value: ""
                }, {
                    label: "Height <small>Include <b>px/%</b></small>",
                    field: "input",
                    type: "text",
                    name: "wmwysiwyg-insertImage-height",
                    id: "wmwysiwyg-insertImage-height",
                    value: ""
                }, {
                    label: "Responsive <small>(max-width:100%)</small>",
                    field: "select",
                    type: "",
                    name: "wmwysiwyg-createLink-target",
                    id: "wmwysiwyg-createLink-target",
                    options: [{
                        text: "No",
                        value: "no"
                    }, {
                        text: "Yes",
                        value: "yes"
                    }],
                    required: !0
                }],
                n = function(e) {
                    var a = e[0].value,
                        n = e[1].value,
                        o = e[2].value,
                        i = e[3].value,
                        d = e[4].value,
                        l = $("<img/>", {
                            src: a,
                            alt: n
                        });
                    "" != o && l.attr("width", o), "" != i && l.attr("height", i), "yes" == d && l.css("max-width", "100%"), t.replacePlaceholder(l)
                };
            t.createModal("Insert Image", a, n, "modal-sm")
        },
        createTable: function(e) {
            var t = this;
            t.createPlaceholder();
            var a = [{
                    label: "Number of Columns",
                    field: "input",
                    type: "number",
                    name: "wmwysiwyg-createTable-cols",
                    id: "wmwysiwyg-createTable-cols",
                    value: "3",
                    required: !0
                }, {
                    label: "Number of Rows",
                    field: "input",
                    type: "number",
                    name: "wmwysiwyg-createTable-rows",
                    id: "wmwysiwyg-createTable-rows",
                    value: "3",
                    required: !0
                }, {
                    label: "Add Table Head",
                    field: "select",
                    type: "",
                    name: "wmwysiwyg-createTable-head",
                    id: "wmwysiwyg-createTable-head",
                    options: [{
                        text: "No",
                        value: "no"
                    }, {
                        text: "Yes",
                        value: "yes"
                    }],
                    required: !0
                }],
                n = function(e) {
                    var a = parseInt(e[0].value),
                        n = parseInt(e[1].value),
                        o = e[2].value,
                        i = $("<table/></table>", {
                            width: "100%",
                            border: 1
                        }),
                        d = $("<thead/>"),
                        l = $("<tbody/>");
                    if ("yes" == o) {
                        for (var c = $("<tr/>"), r = 1; a >= r; r++) {
                            var s = $("<th/>", {
                                text: "Head"
                            });
                            $(c).append(s)
                        }
                        $(d).append(c), $(i).append(d)
                    }
                    for (var f = 1; n >= f; f++) {
                        for (var c = $("<tr/>"), r = 1; a >= r; r++) {
                            var m = $("<td/>", {
                                text: "Cell"
                            });
                            $(c).append(m)
                        }
                        $(l).append(c)
                    }
                    $(i).append(l), t.replacePlaceholder(i)
                };
            t.createModal("Create Table", a, n, "modal-sm")
        },
        destroy: function() {
            var e = this,
                t = e.$editor.html();
            e.html(t).removeAttr("data-height").removeClass("wmwysiwyg-container")
        }
    }, $.fn.wmwysiwyg = function() {
        var e, t = arguments[0],
            a = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var n = $(this),
                o = n.data("wmwysiwyg"),
                i = $.extend({}, $.fn.wmwysiwyg.defaults, n.data(), "object" == typeof t && t);
            o || n.data("wmwysiwyg", o = new WMWysiwygEditor(this, i)), "string" == typeof t ? e = o[t].apply(o, a) : o.init()
        }), e
    }, $.fn.wmwysiwyg.defaults = {
        bootstrap_v: "",
        "class": "",
        toolbar_btn_size: "",
        toolbar_class: "",
        toolbar_btn_class: "",
        height: "",
        btns: [
            ["source", "fullScreen"],
            ["formatting", "fontSize"],
            ["bold", "italic", "underline", "strikeThrough"],
            ["foreColor", "backColor"],
            ["link", "insertImage", "createTable"], "textAlignment", ["subscript", "superscript"],
            ["indent", "outdent"],
            ["ul", "ol", "hr"], "removeFormat"
        ],
        paletteColors: ["#ffebee", "#fce4ec", "#f3e5f5", "#ede7f6", "#e8eaf6", "#e3f2fd", "#e1f5fe", "#e0f7fa", "#e0f2f1", "#e8f5e9", "#f1f8e9", "#f9fbe7", "#fffde7", "#fff8e1", "#fff3e0", "#fbe9e7", "#efebe9", "#fafafa", "#eceff1", "#ffcdd2", "#f8bbd0", "#e1bee7", "#d1c4e9", "#c5cae9", "#bbdefb", "#b3e5fc", "#b2ebf2", "#b2dfdb", "#c8e6c9", "#dcedc8", "#f0f4c3", "#fff9c4", "#ffecb3", "#ffe0b2", "#ffccbc", "#d7ccc8", "#f5f5f5", "#cfd8dc", "#ef9a9a", "#f48fb1", "#ce93d8", "#b39ddb", "#9fa8da", "#90caf9", "#81d4fa", "#80deea", "#80cbc4", "#a5d6a7", "#c5e1a5", "#e6ee9c", "#fff59d", "#ffe082", "#ffcc80", "#ffab91", "#bcaaa4", "#eeeeee", "#b0bec5", "#e57373", "#f06292", "#ba68c8", "#9575cd", "#7986cb", "#64b5f6", "#4fc3f7", "#4dd0e1", "#4db6ac", "#81c784", "#aed581", "#dce775", "#fff176", "#ffd54f", "#ffb74d", "#ff8a65", "#a1887f", "#e0e0e0", "#90a4ae", "#ef5350", "#ec407a", "#ab47bc", "#7e57c2", "#5c6bc0", "#42a5f5", "#29b6f6", "#26c6da", "#26a69a", "#66bb6a", "#9ccc65", "#d4e157", "#ffee58", "#ffca28", "#ffa726", "#ff7043", "#8d6e63", "#bdbdbd", "#78909c", "#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#9e9e9e", "#607d8b", "#e53935", "#d81b60", "#8e24aa", "#5e35b1", "#3949ab", "#1e88e5", "#039be5", "#00acc1", "#00897b", "#43a047", "#7cb342", "#c0ca33", "#fdd835", "#ffb300", "#fb8c00", "#f4511e", "#6d4c41", "#757575", "#546e7a", "#d32f2f", "#c2185b", "#7b1fa2", "#512da8", "#303f9f", "#1976d2", "#0288d1", "#0097a7", "#00796b", "#388e3c", "#689f38", "#afb42b", "#fbc02d", "#ffa000", "#f57c00", "#e64a19", "#5d4037", "#616161", "#455a64", "#c62828", "#ad1457", "#6a1b9a", "#4527a0", "#283593", "#1565c0", "#0277bd", "#00838f", "#00695c", "#2e7d32", "#558b2f", "#9e9d24", "#f9a825", "#ff8f00", "#ef6c00", "#d84315", "#4e342e", "#424242", "#37474f", "#ffffff", "#000000"]
    }, $.fn.wmwysiwyg.Constructor = WMWysiwygEditor
}(window.jQuery);