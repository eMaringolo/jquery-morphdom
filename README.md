# jquery-morphdom

A jQuery wrapper for [morphdom](https://github.com/patrick-steele-idem/morphdom/) - a fast and lightweight DOM diffing/patching (without the virtual part)

### About Morphdom

> Lightweight module for morphing an existing DOM node tree to match a target DOM node tree. It's fast and works with the real DOM no virtual-DOM here!

If you need more information, check the [morphdom repo](https://github.com/patrick-steele-idem/morphdom/#morphdom).

### Usage

This library can be used to instead of `.html` or `.replaceWith`, but keep in mind that this **replaces** the item itself, not just the inside contents. So it is much more like `.replaceWith`.

```js
// this is how .html works
$('#somediv').html("<div id=\"newdiv\">I will be inside #somediv</div>");

// this is how .replaceWith and .morphdom work
$('#somediv').replaceWith("<div id=\"newdiv\">I will replace #somediv</div>");
$('#somediv').morphdom("<div id=\"newdiv\">I will replace #somediv</div>");
```

### Example

See the [example.html](https://github.com/james2doyle/jquery-morphdom/blob/master/example.html) for the full use case.

```js
jQuery(document).ready(function ($) {
    // replace #div with #newid
    $('#div').morphdom("<div id=\"newid\">New Text</div>");

    // replace the first li with the last one
    $('ul').find('li').first().morphdom($('ul').find('li').last());

    // replaces #fetched with the contents of partial.html
    $.get('partial.html', function (data, textStatus, jqXHR) {
        $('#fetched').find('.item').morphdom(data);
    });
});
```

### Usage With Require

Please see this [requirebin project](http://requirebin.com/?gist=9e417680ef14abd2a3c379cd366a8eed).

### Use Cases

* loading form data via AJAX
* partial content, replacing other content
* AJAX pagination
* timeout changes to HTML
* updates to DOM for `input` events
* sortable display of elements
