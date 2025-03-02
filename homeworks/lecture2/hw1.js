/*
* Copy the enumerable properties of p to o, and return o.
* If o and p have a property by the same name, o's property is overwritten.
* This function does not handle getters and setters or copy attributes.
*/
function extend(o, p) {
    for(const i in p){
      o[i]=p[i];
    }
}

/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/
function union(o, p) {
    for(const i in p){
      if(!o.hasOwnProperty(i)){
         o[i]=p[i];
      }
    }
}

/*
* Remove properties from o if there is not a property with the same name in p.
* Return o.
*/
function restrict(o, p) {
    for(const i in o){
        if(!p.hasOwnProperty(i)){
            delete o[i];
        }
    }
}

/*
* Return a new object that holds only the properties of o that also appear
* in p. This is something like the intersection of o and p, but the values of
* the properties in p are discarded
*/
function intersection(o, p) {
    let q = {};
    for(const i in o){
        if(p.hasOwnProperty(i)){
            q[i] = o[i];
        }
    }
    return q;
}
