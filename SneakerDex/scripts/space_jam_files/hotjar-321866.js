window.hjSiteSettings = window.hjSiteSettings || {"testers_widgets":[],"surveys":[],"record_targeting_rules":[],"recording_capture_keystrokes":true,"polls":[],"site_id":321866,"forms":[],"record":false,"heatmaps":[{"created_epoch_time":1477752307,"targeting":[{"negate":false,"pattern":"http:\/\/staging-dedupe.flightclub.com\/adidas-tubular-x-pk-primeknit-tecste-tecste-cblack-201465","match_operation":"simple","component":"url"}],"id":873337,"selector_version":0},{"created_epoch_time":1477690518,"targeting":[{"negate":false,"pattern":"http:\/\/www.flightclub.com\/2016-remastered","match_operation":"simple","component":"url"}],"id":872678,"selector_version":0},{"created_epoch_time":1477690501,"targeting":[{"negate":false,"pattern":"http:\/\/www.flightclub.com\/october-new-arrivals-2016","match_operation":"simple","component":"url"}],"id":872676,"selector_version":0},{"created_epoch_time":1477690484,"targeting":[{"negate":false,"pattern":"http:\/\/www.flightclub.com\/westcoast-2016","match_operation":"simple","component":"url"}],"id":872675,"selector_version":0},{"created_epoch_time":1477690467,"targeting":[{"negate":false,"pattern":"http:\/\/www.flightclub.com\/bc-awareness-2016","match_operation":"simple","component":"url"}],"id":872673,"selector_version":0},{"created_epoch_time":1477690444,"targeting":[{"negate":false,"pattern":"http:\/\/www.flightclub.com\/halloween-2016","match_operation":"simple","component":"url"}],"id":872671,"selector_version":0}],"deferred_page_contents":[{"targeting":[{"negate":false,"pattern":"http:\/\/staging-dedupe.flightclub.com\/adidas-tubular-x-pk-primeknit-tecste-tecste-cblack-201465","match_operation":"simple","component":"url"},{"negate":false,"pattern":"desktop","match_operation":"exact","component":"device"}],"id":2364415},{"targeting":[{"negate":false,"pattern":"http:\/\/staging-dedupe.flightclub.com\/adidas-tubular-x-pk-primeknit-tecste-tecste-cblack-201465","match_operation":"simple","component":"url"},{"negate":false,"pattern":"tablet","match_operation":"exact","component":"device"}],"id":2364414},{"targeting":[{"negate":false,"pattern":"http:\/\/staging-dedupe.flightclub.com\/adidas-tubular-x-pk-primeknit-tecste-tecste-cblack-201465","match_operation":"simple","component":"url"},{"negate":false,"pattern":"phone","match_operation":"exact","component":"device"}],"id":2364413}],"feedback_widgets":[],"r":0.0104114609};

window.hjBootstrap = window.hjBootstrap || function (scriptUrl) {
    var s = function () {}, h, v;

    if (!document.addEventListener) {
        return;
    }

    h = document.createElement('script');
    h.src = scriptUrl;
    document.getElementsByTagName('head')[0].appendChild(h);

    v = document.createElement('iframe');
    v.style.cssText = 'position: fixed !important; top: -100px !important; left: -100px !important; width: 1px !important; height: 1px !important;';
    v.id = '_hjRemoteVarsFrame';
    v.src = 'https://' + (window._hjSettings.varsHost || 'vars.hotjar.com') + '/rcj-2e6153f931e5c8a79f89c0c503e3c25e.html';
    v.onload = function () {
        s.varsLoaded = true;
        if ((typeof hj != 'undefined') && hj.event) {
            hj.event.signal('varsLoaded');
        }
    };
    s.varsJar = v;

    if (document.body) {
        document.body.appendChild(v);
    } else {
        document.addEventListener('DOMContentLoaded', function () {
            document.body.appendChild(v);
        });
    }
    window.hjBootstrap = s;
};


hjBootstrap('https://script.hotjar.com/modules-197d79caaa971610bcdd7c269360e443.js');