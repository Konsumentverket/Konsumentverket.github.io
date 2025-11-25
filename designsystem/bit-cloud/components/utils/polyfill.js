export const Polyfill = (nounce) => `
        var pf = [];
        if(!Object.assign)pf.push("Object.assign");
        if(!window.Promise)pf.push("Promise");
        if(!window.fetch)pf.push("fetch");
        if(!window.IntersectionObserver)pf.push("IntersectionObserver");
        if(!window.IntersectionObserverEntry)pf.push("IntersectionObserverEntry");
        if(!window.URL || typeof window.URL !== "function")pf.push("URL");
        if(!Array.prototype.find)pf.push("Array.prototype.find");
        if(!Array.prototype.includes)pf.push("Array.prototype.includes");
        if(!Array.prototype.findIndex)pf.push("Array.prototype.findIndex")
        if(!Array.prototype.entries)pf.push("Array.prototype.entries")
        if(!window.HTMLPictureElement)pf.push("HTMLPictureElement")
        if(!String.prototype.endsWith)pf.push("String.prototype.endsWith");
        if(!String.prototype.startsWith)pf.push("String.prototype.startsWith");
        if(!Object.values)pf.push("Object.values");
        if(!Object.entries)pf.push("Object.entries");
        if(!Element.prototype.matches)pf.push("Element.prototype.matches")
        if(!Element.prototype.remove)pf.push("Element.prototype.remove")
        if(pf.length > 0) {
            console.log("polyfill(s) found",pf)
            var js = document.createElement('script');
            js.src = "https://polyfill.io/v3/polyfill.min.js?features="+pf.join(",");
            js.nounce = "${nounce}";
            document.head.appendChild(js);
        }
    `
