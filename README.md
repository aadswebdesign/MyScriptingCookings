# MyPHPCookings

A place where I'm going to submit php stuff that might comming in handy for others too.

1. 08-12-2024, ValidatorExtended.

An extension of vlucas's Valitron/Validator.

With the aim to creating a more JSON friendly output of Error values!

Old, with the errors() method and still possible

Valitron: <code>{"post_title":["Post Title is required"],"post_content":["Post Content is required"]}</code>

New, with the errorsFlatten() method

ValidatorExtended: <code>{"post_title":"Post Title is required","post_content":"Post Content is required"}</code>

The editions in this file are very minimal but making the JSON output, much easier to access in the frontend