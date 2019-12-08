var MultiOptionFilter = Class.create(
    {
        initialize: function (url, ajax_search_layered, extra_updatehtml_func, filter_preaction_func, use_exploded_ajaxmenu, use_history_pushState) {
            this.url = url;
            this.ajax_search_layered = ajax_search_layered;
            this.extra_updatehtml_func = extra_updatehtml_func;
            this.filter_preaction_func = filter_preaction_func;
            this.href_extract_func = null;
            this.live_req_cnt = 0;
            this.use_exploded_ajaxmenu = use_exploded_ajaxmenu;
            this.use_history_pushState = use_history_pushState;
            this.use_loader = 1;
            this.prefetch_next_page = 0;
            this.autoload_page = 1;
            this.uses_gradual_autoload = false;
            this.uses_scroll_autoload = false;
            this.scroll_autoload_triggered = false;
            this.before_autoload_insert_func = null;

            var options = (typeof mof_filter_options !== "undefined" ? mof_filter_options : "");
            var options = (typeof mof_filter_options !== "undefined" ? mof_filter_options : "");
            this.autoload_request_params = options;
            this.request_params = options;
            this.request_url = url;

            this.resetObserverArrays();
            this.addEventListenersToFilterLinks();
        },

        addUpdateLayeredPanelHooks: function (hook_before_update, hook_after_update) {
            this.hook_before_update = hook_before_update;
            this.hook_after_update = hook_after_update;
        },

        setExtraUpdateHtmlFunc: function (extra_updatehtml_func) {
            this.extra_updatehtml_func = extra_updatehtml_func;
        },

        setExtraUpdateHtmlFuncAfterListeners: function (extra_updatehtml_func_after_listeners) {
            this.extra_updatehtml_func_after_listeners = extra_updatehtml_func_after_listeners;
        },

        setFilterPreactionFunc: function (filter_preaction_func) {
            this.filter_preaction_func = filter_preaction_func;
        },

        setExplodedMenuUpdateFunc: function (exploded_menu_update_func) {
            this.exploded_menu_update_func = exploded_menu_update_func;
        },

        setHrefExtractFunc: function (href_extract_func) {
            this.href_extract_func = href_extract_func;
        },

        setPrefetchNextPage: function (prefetch_next_page) {
            this.prefetch_next_page = prefetch_next_page;
        },

        setItemToggleFunc: function (item_toggle_func) {
            this.item_toggle_func = item_toggle_func;
        },

        setUseLoader: function (use_loader) {
            this.use_loader = use_loader;
        },

        setAutoloadBeforeInsertFunc: function (func) {
            this.before_autoload_insert_func = func;
        },

        setUsesScrollAutoload: function (use_it, count) {
            this.uses_scroll_autoload = use_it;
            this.scroll_trigger_count = (typeof count != "undefined" ? count : 15);

            if (use_it) {
                Event.observe(window, 'scroll', function () {
                    if (!mof.scroll_autoload_triggered) {
                        mof.scrollGradualAutoLoad();
                    }
                });
            }
        },

        resetObserverArrays: function () {
            //this.obs_search = new Array();
            this.obs_toolbars_click = new Array();
            this.obs_toolbars_change = new Array();
            this.obs_filter = new Array();
            this.obs_search = new Array();
            this.obs_others = new Array();
            this.obs_dupl_cnt = 0;
        },

        addInStockSwitch: function () {
            var checkBox = $$('.inStockCheckBox');
            if (checkBox) {
                checkBox.each(function (node) {
                    if (this.obs_filter.indexOf(node) < 0) {
                        Event.observe(node, 'change', this.multiOptionFilterAction.bind(this));
                        this.obs_filter.push(node);
                    } else {
                        this.obs_dupl_cnt++; //alert("Found old filt node");
                    }
                }.bind(this));
            }
        },


        addEventListenersToFilterLinks: function () {
            this.addInStockSwitch();
            // Remove the original onchange-attributes from selects
            var toolbars = $$('.toolbar');
            toolbars.each(function (node) {
                if ($(node).select('select').length > 0) {
                    $(node).select('select').each(function (node) {
                        node.removeAttribute('onchange');
                        // IE Fix
                        node.onchange = null;
                    }.bind(this));
                }
            }.bind(this));

            // Add listeners to links in layered nav
            //if($$('.header-filter-menu a').length > 0){
            var nodes = $$(".filter-block ul li a, .filter-block .clear-filter");
            nodes.each(function (node) {
                if (this.obs_filter.indexOf(node) < 0) {
                    Event.observe(node, 'click', this.multiOptionFilterAction.bind(this));
                    this.obs_filter.push(node);
                } else {
                    this.obs_dupl_cnt++; //alert("Found old filt node");
                }

            }.bind(this));

            var price_range_fields = $$(".filter-block ul li .price_range");
            price_range_fields.each(function (node) {
                if (this.obs_filter.indexOf(node) < 0) {
                    Event.observe(node, 'change', this.multiOptionFilterAction.bind(this));
                    this.obs_filter.push(node);
                } else {
                    this.obs_dupl_cnt++;
                }

            }.bind(this));

            // Add listeners to toolbar links and selects
            toolbars.each(function (node) {
                if ($(node).select('a').length > 0) {
                    $(node).select('a').each(function (node) {
                        if (this.obs_toolbars_click.indexOf(node) < 0) {
                            Event.observe(node, 'click', this.multiOptionFilterAction.bind(this));
                            this.obs_toolbars_click.push(node);
                        } else {
                            this.obs_dupl_cnt++; //alert("Found old tb cl node");
                        }
                    }.bind(this));
                }

                if ($(node).select('select').length > 0) {
                    $(node).select('select').each(function (node) {
                        if (this.obs_toolbars_change.indexOf(node) < 0) {
                            Event.observe(node, 'change', this.multiOptionFilterAction.bind(this));
                            this.obs_toolbars_change.push(node);
                        } else {
                            this.obs_dupl_cnt++; //alert("Found old tb chg node");
                        }
                    }.bind(this));
                }
            }.bind(this));

            // Add listeners to Search minifrom - only once
            if (this.ajax_search_layered) {
                var sform = $("search_mini_form");
                if (sform) {
                    if (this.obs_search.indexOf(sform) < 0) {
                        Event.observe(sform, 'submit', this.multiOptionFilterAction.bind(this));
                        this.obs_search.push(sform);
                    }
                    /*var sbutton = sform.select("button");
                     if( sbutton.length>0 ){
                     Event.observe( sbutton[0], 'click', this.multiOptionFilterAction.bind(this) );
                     }*/
                }
            }
            //Add listener to mobile sorter
            var toolbars = $$('.mobile-sorter');
            toolbars.each(function (node) {
                if ($(node).select('select').length > 0) {
                    $(node).select('select').each(function (node) {
                        if (this.obs_toolbars_change.indexOf(node) < 0) {
                            Event.observe(node, 'change', this.multiOptionFilterAction.bind(this));
                            this.obs_toolbars_change.push(node);
                        } else {
                            this.obs_dupl_cnt++; //alert("Found old tb chg node");
                        }
                    }.bind(this));
                }
            }.bind(this));
        },

        // Add custom event listeners from externally
        addNodesToListeners: function (nodes, event) {
            if (nodes) {
                nodes.each(function (node) {
                    if (this.obs_others.indexOf(node) < 0) {
                        Event.observe(node, event, this.multiOptionFilterAction.bind(this));
                        this.obs_others.push(node);
                    } else {
                        this.obs_dupl_cnt++;
                    }
                }.bind(this));
            }
        },

        getOptionIdFromLink: function (link) {
            var hr_cls = $w(link.className);
            for (var ix = 0; ix < hr_cls.length; ix++) {
                var cls = hr_cls[ix].split("--");
                if (cls.length > 1) return cls[1];
            }
            this.addNodesToListeners;
        },


        // In exploded menu mode, update the static menu:s links
        updateActiveMenuLinks: function (trigger_node, opt_id) {
            var attrib = this.attrib;
            var out_this = this;
            trigger_node.select("a").each(function (node) {
                var qs = node.readAttribute('href'); //.split("?");
                var qso = qs;
                var p = qs.indexOf(attrib + "=");
                if (p > 0 && (qs[p - 1] == '?' || qs[p - 1] == '&')) {
                    if (opt_id != "view-all") {
                        // Found attribute in query string
                        p += attrib.length + 1;
                        var pp = p - 1;
                        while ((pp = qs.indexOf(opt_id, pp + 1)) > 0) {
                            // Real hit ?
                            var pr = pp + opt_id.length;
                            if ((qs[pp - 1] == '=' || qs[pp - 1] == ',') &&
                                (pr >= qs.length || qs[pr] == '&' || qs[pr] == ',')) {
                                // It was there, so remove it
                                if (qs[pp - 1] == ',') qs = qs.substr(0, pp - 1) + qs.substr(pr);
                                else if (qs[pr] != '&')  qs = qs.substr(0, pp) + qs.substr(pr + 1);
                                else qs = qs.substr(0, pp) + qs.substr(pr);
                                break;
                            }
                        }
                        // If p>0 then we have already removed the option (above loop).
                        // Otherwise, insert it
                        if (pp < 0) {
                            var tail = qs.substr(p);
                            qs = qs.substr(0, p) + opt_id;
                            if (tail) {
                                qs += "," + tail;
                            }
                        }
                    } else {
                        // We clicked "View all", have to reset all links back to only the original option
                        var pp = qs.indexOf("&", p + 1);
                        var qsn = qs.substr(0, p);
                        if (pp > 0) qsn += qs.substr(pp);
                        qs = qsn;
                    }
                }
                else {
                    // After "View all", we're happy when the links don't have the attribute nae
                    if (opt_id != "view-all") {
                        if (!node.hasClassName("mof-view-all")) {
                            // If the option is not in the query string, we have to put it there
                            if (qs.indexOf("?") >= 0) qs += "&";
                            qs += attrib + "=" + opt_id;
                        }
                    }
                }

                if (opt_id == "view-all") {
                    var node_opt_id = out_this.getOptionIdFromLink(node);
                    if (node_opt_id) {
                        if (qs.indexOf("?") >= 0 && qs.charAt(qs.length - 1) != "&") qs += "&";
                        qs += attrib + "=" + node_opt_id;
                    }
                }

                // Change the href
                node.writeAttribute('href', qs);
            });
        },

        multiOptionFilterAction: function (e) {

            var href = null;
            var realHref = null;
            var params = "";
            var opt_id = null;
            this.trigger_menu = null;
            this.attrib = null;
            var trigger_node = null;

            if (this.href_extract_func) {
                href = this.href_extract_func(e);
            }

            if (href == null) {
                var link = Event.findElement(e, 'A');
                if (link != null) {
                    href = link.readAttribute('href');
                    if (link.hasAttribute('data-ajax-url')) {
                        realHref = href;
                        href = link.readAttribute('data-ajax-url');
                    }
                    if (link.hasClassName("mof-view-all")) {
                        opt_id = "view-all";
                    } else {
                        // Extract the option ID
                        opt_id = this.getOptionIdFromLink(link);
                    }
                    // Extract the attribute name
                    $(link).ancestors().each(function (node) {

                        if ($(node).hasClassName('filter-block')) {

                            trigger_node = node;

                            $w(node.className).each(function (cls) {

                                // If it contain -- we select it, no one else is using -- in classnames...
                                if (cls.match(/\-\-/)) {
                                    this.trigger_menu = cls;
                                    this.attrib = this.trigger_menu.split("--")[1];
                                }

                            }.bind(this));

                        }
                    }.bind(this));

                    // Callback to app, for process item
                    if (this.attrib && this.item_toggle_func) {
                        this.item_toggle_func(link);
                    }
                }
                else {
                    var price_input = Event.findElement(e, '.price_range');
                    if (price_input) {
                        params = mof_filter_options;
                        // Clear out old search
                        params = params.replace(/(.*)price=[^\&]*(.*)/, "$1$2");
                        params = params.replace(/(.*)\&\&(.*)/, "$1\&$2");
                        if (params[params.length - 1] != '&') params += "&";
                        params += 'price=' + price_input.value;
                        href = price_input.readAttribute('data-ajax-url');
                    } else {

                        // most likely a select
                        var select = Event.findElement(e, 'SELECT');
                        if (select) {
                            href = $F(select);
                        }
                        if (!href) {
                            var checkBox = Event.findElement(e, 'input');
                            href = checkBox.readAttribute('data-ajax-url');
                            if (!href) {
                                // Mini search form
                                href = e.element().readAttribute('action');
                                if (href) {
                                    //var word = $('search').value;
                                    var word = encodeURIComponent($('search').value);
                                    try {
                                        // See if we get the search instruction here
                                        if (word == mof_search_instruction) {
                                            //alert( "Empty search" );
                                            //Event.stop(e);
                                            //return;
                                            // Let it go through to clear all searching
                                            word = "";
                                        }
                                    } catch (e) {
                                    }
                                    params = mof_filter_options;
                                    // Clear out old search
                                    params = params.replace(/(.*)q=[^\&]*(.*)/, "$1$2");
                                    params = params.replace(/(.*)\&\&(.*)/, "$1\&$2");
                                    if (word) {
                                        if (params) {
                                            if (params[params.length - 1] != '&') params += "&";
                                        }
                                        params += 'q=' + word;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            // We should have a href here. If we continue without it,
            // we will empty out the filters, stop that here
            if (!href || href == "javascript:void(0)") return;

            var parts = href ? href.split('?') : [];
            if (!params && parts.length > 1) {
                params = parts[1];
            }

            // Give application a chance if it has a pre-hook
            var processed = false;
            if (this.filter_preaction_func) {
                processed = this.filter_preaction_func(e, this.url, params);
            }

            // Avoid further request processing
            Event.stop(e);

            if (!processed) {
                if (!this.live_req_cnt++) {
                    this.addLoader();
                }
                // Should we use different Ajax call ?
                var url = this.url;
                if (this.attrib && opt_id) {
                    url += "ExplodedMenu";
                }

                this.request_url = url;
                this.request_params = params;
                var request = new Ajax.Request(
                    url,
                    {
                        method: 'get',
                        parameters: params,
                        onSuccess: this.updateHtml.bind(this),
                        onFailure: this.ajaxFailure
                    }
                );

                // Now modify the hrefs for this menu, once the query is in progress, we need all hrefs in this menu to include it
                if (this.attrib && opt_id && trigger_node) {
                    this.updateActiveMenuLinks(trigger_node, opt_id);
                }
            }

            if (realHref !== null && this.use_history_pushState && typeof history.pushState !== "undefined") {
                history.pushState(null, null, realHref);
            }
        },

        intializeNextPage: function () {
            if (this.prefetch_next_page == 1) {
                this.getNextPage();
            }
        },

        getNextPageParams: function (params) {
            var nextPage = false;
            var parts = params.split('&');
            for (i = 0; i < parts.length; i++) {
                var val = parts[i].split('=');
                if (val[0] == 'p') {
                    val[1] = (parseInt(val[1]) + 1);
                    nextPage = 'p=' + val[1];
                    params = params.replace(parts[i], nextPage);
                }
            }

            if (nextPage == false) {
                params += "&p=2";
            }

            return params;
        },

        getNextPage: function () {
            this.request_params = this.getNextPageParams(this.request_params) + "&__prefetch__=1";
            var request = new Ajax.Request(
                this.request_url,
                {
                    method: 'get',
                    parameters: this.request_params
                }
            );
        },

        updateHtml: function (transport) {
            //console.log(transport);
            if (transport && transport.responseText != null) {
                try {
                    response = eval('(' + transport.responseText + ')');
                }
                catch (e) {
                    response = {};
                }
            }

            /*if(response.error){
             alert(response.message);
             return false;
             }*/


            if (!--this.live_req_cnt) {
                this.removeLoader();
            }
            // If we do not get any panel back, we end up in a dead state. Stop that
            if (response.r_code < 0) {
                // No products returned?
                if (response.r_code == -1) {
                    var msg = "There were no products matching this filter";
                    try {
                        msg = ic_mof_empty_nav_panel_msg;
                    } catch (e) {
                    }
                    alert(msg);
                    return;
                }


                // Session dead?
                if (response.r_code == -2) {
                    // Do full page request
                    window.location = mof_base_url;
                    return;
                }
            }

            // Empty nav HTML indicates we should keep old panel
            if (typeof response.block_layered_nav != "undefined") {
                if (response.block_layered_nav.html) {
                    var nodes = $$('.block-layered-nav');
                    if (nodes) {
                        if (this.hook_before_update) this.hook_before_update(this.trigger_menu);
                        nodes[0].update(response.block_layered_nav.html);
                        if (this.hook_after_update) this.hook_after_update(this.trigger_menu);
                    }
                }
            } else if (typeof response.exploded_menu != "undefined") {
                // We have received exploded menus in return
                if (this.hook_before_update) this.hook_before_update(this.trigger_menu);
                var rem = response.exploded_menu;
                for (var a in rem) {
                    if (!rem.hasOwnProperty(a)) {
                        continue;
                    }
                    // Is it a menu ?
                    var ul_node = $("filter-ul-id--" + a);
                    // Not the triggering menu?
                    if (ul_node && a != this.attrib) {
                        var html = response.exploded_menu[a];
                        if (this.exploded_menu_update_func) {
                            this.exploded_menu_update_func(ul_node, html);
                        } else {
                            ul_node.update(html);
                        }
                    }
                }
                if (this.hook_after_update) this.hook_after_update(this.trigger_menu);
            }

            var items_found = $$('.filter-items-found .amount');
            if (response.r_code >= 0) {
                var updateItemsNumber;
                var updateItemsNumberSimple;
                if (response.r_code == 1) {
                    updateItemsNumberSimple = '1 Item';
                    updateItemsNumber = '1 <span>Item found</span>';
                } else {
                    updateItemsNumberSimple = response.r_code + ' Items';
                    updateItemsNumber = response.r_code + ' <span>Items found</span>';
                }
                items_found.each(function (el) {
                    if($(el).hasClassName('simple')) {
                        $(el).update(updateItemsNumberSimple);
                    }
                    else {
                        $(el).update(updateItemsNumber);
                    }
                });
            }
            // List block tagged in some various ways
            var list_elem = $('product-list-container');
            if (!list_elem) {
                if ($$('.category-view').length > 0) {
                    list_elem = $$('.category-view')[0];
                } else if ($$('.category-products').length > 0) {
                    list_elem = $$('.category-products')[0];
                }
            }
            // We get an error if no listblock found. But that's OK.
            list_elem.update(response.block_product_list.html);

            // Prefetch
            if (this.prefetch_next_page == 1) {
                this.getNextPage();
            }

            // Update the global query string variable
            mof_filter_options = response.query_string;

            if (this.extra_updatehtml_func) {
                this.extra_updatehtml_func(response);
            }

            this.addEventListenersToFilterLinks();

            if (this.extra_updatehtml_func_after_listeners) {
                this.extra_updatehtml_func_after_listeners();
            }

            // Trigger auto-load ?
            if (this.uses_gradual_autoload) {
                mof_last_page_num = response.last_page_num;
                this.autoload_page = 1;
                this.initGradualAutoLoad();
            }
        },

        ajaxFailure: function () {
            //console.log('ajaxfailure');
        },

        centerElementVertically: function (element) {
            if ($(element) != null) {

                var viewport = document.viewport.getDimensions();
                var windowHeight = viewport.height;

                var scrollOffsets = document.viewport.getScrollOffsets();
                var scrollTop = scrollOffsets.top;

                var yPos = Math.round(windowHeight / 2) + scrollTop;
                yPos = yPos - ($(element).getHeight() / 2)

                $(element).style.top = yPos + 'px';
            }
        },

        addLoader: function () {
            if (this.use_loader) {
                var loaderHtml = '<div id="multioptionfilter-loader"><div class="loader"></div></div>';
                $$('body')[0].insert(loaderHtml);
                this.centerElementVertically($('multioptionfilter-loader'));
            }
        },

        removeLoader: function () {
            if (this.use_loader) {
                if ($('multioptionfilter-loader')) {
                    $('multioptionfilter-loader').remove();
                }
            }
        },

        gradualAutoLoadUpdatehtml: function (transport) {
            //console.log(transport);
            if (transport && transport.responseText != null) {
                try {
                    response = eval('(' + transport.responseText + ')');
                }
                catch (e) {
                    response = {};
                }
            }

            // If we do not get any panel back, we end up in a dead state. Stop that
            if (response.r_code < 0) {
                // No particular error handling at this time
                return;
            }

            if (typeof response.block_product_list.html !== "undefined") {
                // Find the list block
                var list_elem = $('product-list-container');
                if (!list_elem) {
                    if ($$('.category-view').length > 0) {
                        list_elem = $$('.category-view')[0];
                    } else if ($$('.category-products').length > 0) {
                        list_elem = $$('.category-products')[0];
                    }
                }
                if (!list_elem) return;

                var append_node = list_elem.down(".products-grid");
                if (!append_node) return;

                // Extract out the inner level of products returned
                var div = new Element("div");
                try {
                    div.insert(response.block_product_list.html);
                    var inner_list_new = div.down(".products-grid");
                    // Run custom function on this ?
                    if (this.before_autoload_insert_func) {
                        this.before_autoload_insert_func(inner_list_new);
                    }
                } catch (e) {
                    var x = 1;
                }

                // Append new products
                var elems = inner_list_new.childElements();
                elems.each(function add(e) {
                    append_node.insert(e);
                });

                // Update state and start another batch
                this.autoload_request_params = this.temp_autoload_request_params;
                this.autoload_page++;

                // Only start a new background fetch if we're currently not waiting for real filter response
                if (!this.live_req_cnt && !this.uses_scroll_autoload) {
                    this.initGradualAutoLoad();
                }

                if (this.uses_scroll_autoload) {
                    mof.scroll_autoload_triggered = false;
                }
            }
        },

        scrollGradualAutoLoad: function () {
            var $itemTotal = $$(".products-grid .item").length,
                $itemDisplay = this.scroll_trigger_count,
                $itemTrigger = (($itemTotal - $itemDisplay) < $itemDisplay) ? $$(".products-grid .item")[0] : $$(".products-grid .item")[$itemTotal - $itemDisplay],
                $itemOffset = $itemTrigger.viewportOffset(),
                $viewPort = document.viewport.getDimensions();

            if ($itemOffset.top < $viewPort.height) {
                mof.scroll_autoload_triggered = true;
                mof.initGradualAutoLoad();
            }
        },

        initGradualAutoLoad: function () {
            // Continue with next auto load ?
            this.uses_gradual_autoload = true;
            if (this.autoload_page < mof_last_page_num) {
                this.temp_autoload_request_params = this.getNextPageParams(this.autoload_request_params);
                var url = this.url + "AutoLoad";
                var request = new Ajax.Request(
                    url,
                    {
                        method: 'get',
                        parameters: this.temp_autoload_request_params,
                        onSuccess: this.gradualAutoLoadUpdatehtml.bind(this),
                        onFailure: this.ajaxFailure
                    }
                );
            }
        }

    });
