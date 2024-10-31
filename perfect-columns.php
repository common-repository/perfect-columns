<?php
/*
Plugin Name: Perfect Columns
Plugin URI:
Description: Add shortcodes to easily create up to 12 equal columns in your pages and posts
Version: 1.2.0
Author: Alex Kuttner
Author URI:
License: GPLv2

/*  Copyright 2014  Alex Kuttner  (email : alex@tymax.com.au)

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License, version 2, as
    published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

/*------------------------------------*\
	ShortCode Functions
\*------------------------------------*/
function shortcode_row($atts, $content = null)
{
    //$content = wpautop(trim($content));// This will stop automatic insertion of <br /> and <p> tags inside the row tags
    return '<div class="p-row clear-fix">' . do_shortcode($content) . '</div>'; // do_shortcode allows for nested Shortcodes
}
function shortcode_col_1($atts, $content = null) // shortcode allows for nesting within above element. Fully expandable.
{
    return '<div class="p-col-1">' . $content . '</div>';
}
function shortcode_col_2($atts, $content = null)
{
    return '<div class="p-col-2">' . $content . '</div>';
}
function shortcode_col_3($atts, $content = null)
{
    return '<div class="p-col-3">' . $content . '</div>';
}
function shortcode_col_4($atts, $content = null)
{
//    return str_replace("\r\n", '', $content);
    return '<div class="p-col-4">' . $content . '</div>';
}
function shortcode_col_5($atts, $content = null)
{
    return '<div class="p-col-5">' . $content . '</div>';
}
function shortcode_col_6($atts, $content = null)
{
    return '<div class="p-col-6">' . $content . '</div>';
}
function shortcode_col_7($atts, $content = null)
{
    return '<div class="p-col-7">' . $content . '</div>';
}
function shortcode_col_8($atts, $content = null)
{
    return '<div class="p-col-8">' . $content . '</div>';
}
function shortcode_col_9($atts, $content = null)
{
    return '<div class="p-col-9">' . $content . '</div>';
}
function shortcode_col_10($atts, $content = null)
{
    return '<div class="p-col-10">' . $content . '</div>';
}
function shortcode_col_11($atts, $content = null)
{
    return '<div class="p-col-11">' . $content . '</div>';
}
function shortcode_col_12($atts, $content = null)
{
    return '<div class="p-col-12">' . $content . '</div>';
}

/*--- Now add the shortcodes ---*/
add_shortcode('row', 'shortcode_row'); // You can place [row] in Pages, Posts now.
$x = 1;
while($x <= 12) {
    add_shortcode('col-'. $x, 'shortcode_col_'. $x);
    $x++;
}


/*------------------------------------*\
	ADD BUTTONS TO TINYMCE
\*------------------------------------*/

function add_button() {
    // We are checking whether the user has the necessary authorization to edit a page or a post before proceeding.
    if ( current_user_can('edit_posts') &&  current_user_can('edit_pages') )
        //Once that's done, we hook up two of our [to be written] functions to specific filters.
        //Below, we proceed regardless of which mode the editor is in (Visual or Editor).
    {
        add_filter('mce_external_plugins', 'add_plugin');
        add_filter('mce_buttons', 'register_button');
    }
}

/*--- HOOK ---*/
//Add Button to TinyMCE editor in Worpdress for EQUAL COLUMNS
//We're asking WordPress to run the function called add_button this is our Hook
add_action('init', 'add_button');

/*--- Adds the shortcode to the button we click on ---*/
function register_button($buttons) {
    //You can also add a divider between your new button and the previous buttons by passing in a | before.
    array_push($buttons, "row", "col_1", "col_2", "col_3", "col_4", "col_5", "col_6", "col_7", "col_8", "col_9", "col_10", "col_11", "col_12");
    return $buttons;
}

/*------------------------------------*\
	REGISTER TinyMCE plugin
\*------------------------------------*/
function add_plugin($plugin_array) {
    //The snippet lets TinyMCE, and WordPress, know how to handle this button.
    //Here, we map our shortcode to a specific JavaScript file.
    $javascript = get_bloginfo('url').'/wp-content/plugins/perfect-columns/perfect-columns.js';

    $y = 1;
    while($y <= 12) {
        if($y == 1) {
            //run this once
            $plugin_array['row'] = $javascript;
        }
        //add all the columns to the array
        $plugin_array['col_'.$y] = $javascript;
        $y++;
    }
    return $plugin_array;
}

/*------------------------------------*\
	FILTERS
    Removes all annoying <br /> and <p> tags after and before the shortcodes inserted by Wordpress
\*------------------------------------*/
function the_content_filter($content) {
    $block = join("|",array("row", "col-1", "col-2", "col-3", "col-4", "col-5", "col-6", "col-7", "col-8", "col-9", "col-10", "col-11", "col-12"));
    $rep = preg_replace("/(<p>)?\[($block)(\s[^\]]+)?\](<\/p>|<br \/>)?/","[$2$3]",$content);
    $rep = preg_replace("/(<p>)?\[\/($block)](<\/p>|<br \/>)?/","[/$2]",$rep);
    return $rep;
}
add_filter("the_content", "the_content_filter");

/*------------------------------------*\
	Enqueue the style sheet
\*------------------------------------*/
add_action('wp_enqueue_scripts', 'frontend_styles'); // Add Theme Stylesheet
function frontend_styles() {
    wp_register_style('perfect-columns', get_bloginfo('url').'/wp-content/plugins/perfect-columns/perfect-columns.css', array(), '1.0', 'all');
    wp_enqueue_style('perfect-columns'); // Enqueue it!
}
