if(navigator.userAgent.match(/IEMobile\/10\.0/)){var msViewportStyle=document.createElement("style");msViewportStyle.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")),document.getElementsByTagName("head")[0].appendChild(msViewportStyle)}"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),jQuery(function(){Modernizr.boxsizing||jQuery(".boxSized, .boxSized *").each(function(){var $this=jQuery(this),fullW=$this.outerWidth(),actualW=$this.width(),wDiff=fullW-actualW,newW=actualW-wDiff;$this.css("width",newW)})});