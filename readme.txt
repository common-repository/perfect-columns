=== Perfect Columns ===
Contributors: moto_485
Tags: shortcode, columns, grid, mobile, rows
Requires at least: 3.9
Tested up to: 3.9.1
Stable tag: 1.2.0
License: GPLv2
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Add shortcodes to easily create up to 12 equal columns in your pages and posts

== Description ==
If you need two, three or more columns of text or images and need them to be exactly the same using on CSS3 then this is it.

First insert a [row] shortcode (this needs to wrap around every new row) then click the numbers until you have added shortcodes that add up to 12.

Example -
[row]

[p-col-3]

Content Here

[/p-col-3]

[p-col-3]

Content Here

[/p-col-3]

[p-col-3]

Content Here

[/p-col-3]

[p-col-3]

Content Here

[/p-col-3]

[/row]


These rows will collapse for mobile devices.

Feel free to over write the css in your themes style sheet.

NOTE
This uses box-sizing:border-box in the css you may notice a slight change in your theme if not already using this.

If you do you will need to adjust your themes css. 
Basically you may find you lose width in your DIVs, it should be just an easy matter of adding some width to these DIVs.

What box-sizing:border-box does is set your width, for example:
If your DIV was set to a width of 100px and you added padding-left:5px; border-left:1px solid; this padding and border will be added inside the DIV in turn not effecting the 100px width. With out this in the css 100px width would be expanded to a total of 106px.

== Installation ==
1. Upload perfect-columns to the /wp-content/plugins/ directory
2. Activate Perfect Columns through the \'Plugins\' menu in WordPress
3. A row of buttons will be added to the top of the WYSIWYG editor.
4. With every row you would like to create first click on the [R] then click the numbers until you have added shortcodes that add up to 12. Then just repeat the process for the next row.

NOTE
If you start adding shortcodes inside shortcodes inside shortcodes you will find that this will not work.

== Frequently Asked Questions ==

== Screenshots ==

1. After installation you will have blue buttons along the top of your editor.
2. First click the [R] button for each new row. 

== Changelog ==

= 1.1.0 =
Initial release

== Upgrade Notice ==
