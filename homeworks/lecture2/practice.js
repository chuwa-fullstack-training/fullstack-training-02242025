function extend(o, p) {
    p.forEach(keyP => {
        if(o[kep]) o[keyP] = p[keyP]
    })
    return o
}



/*
* Return a new object that holds the properties of both o and p.
* If o and p have properties by the same name, the values from o are used.
*/

