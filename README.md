# jquery-morphdom

A jQuery wrapper for [morphdom](https://github.com/patrick-steele-idem/morphdom/) - a fast and lightweight DOM diffing/patching (without the virtual part)

### About Morphdom

> Lightweight module for morphing an existing DOM node tree to match a target DOM node tree. It's fast and works with the real DOM—no virtual DOM here!

If you need more information, check the [morphdom repo](https://github.com/patrick-steele-idem/morphdom/#morphdom)

### Example

See the example.html

### Usage

This library can be used to replace `.html` and `.replaceWith`, but keep in mind that this **replaces** the item itself, not just the inside contents. So it is much more like `.replaceWith`.

```js
$('#somediv').html("<div id=\"newdiv\">I will be inside #somediv</div>");
$('#somediv').replaceWith("<div id=\"newdiv\">I will replace #somediv</div>");
$('#somediv').morphdom("<div id=\"newdiv\">I will also replace #somediv</div>");
```

### Use Cases

* loading form data via AJAX
* partial content, replacing other content
* AJAX pagination
* timeout changes to HTML
* updates to DOM for `input` events
* sortable display of elements
