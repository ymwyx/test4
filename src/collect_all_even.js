function collect_same_elements(collection_a, object_b) {

    var i = 0;
    var j = 0;

    var arr = [];

    for (key in collection_a)
        for (i = 0; i < object_b.value.length; i++)
            if (collection_a[key].key == object_b.value[i])
                arr.push(collection_a[key].key);

    return (arr);


}

module.exports = collect_same_elements;
