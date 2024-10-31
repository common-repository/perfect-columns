/**
 * Created by Alex Kuttner on 9/04/14.
 */
(function() {
    /* First order of the day is a quick closure to keep from polluting the global namespace.
    Inside, we call the create method to create a new plugin passing in the name and other assorted attributes.
    For the sake of brevity, I'm just going to call my plugin quote. */
    tinymce.create('tinymce.plugins.row', {
        init : function(ed, url) {
            /*Once inside, we define the init function that's executed upon initialization. ed points to the instance of
            the editor while url points to the URL of the plugin code.*/
            ed.addButton('row', {
                title : 'row',
                image : url+'/img/row.png',
                /* Next up, we create the event handler for this button through the onclick function.
                The one-liner it contains essentially gets the selected text, if any, and wraps it with out
                shortcode. setContent and getContent are helper methods provided by tinyMCE to
                manipulate the selected text. */
                onclick : function() {
                    ed.selection.setContent('[row]' + ed.selection.getContent() + '[/row]');
                }
            });
        }
    });
    // Col-1
    tinymce.create('tinymce.plugins.col_1', {
        init : function(ed, url) {
            ed.addButton('col_1', {
                title : 'col-1',
                image : url+'/img/col-1.png',
                onclick : function() {
                    ed.selection.setContent('[col-1]' + ed.selection.getContent() + '[/col-1]');
                }
            });
        }
    });
    // Col-2
    tinymce.create('tinymce.plugins.col_2', {
        init : function(ed, url) {
            ed.addButton('col_2', {
                title : 'col-2',
                image : url+'/img/col-2.png',
                onclick : function() {
                    ed.selection.setContent('[col-2]' + ed.selection.getContent() + '[/col-2]');
                }
            });
        }
    });
    // Col-3
    tinymce.create('tinymce.plugins.col_3', {
        init : function(ed, url) {
            ed.addButton('col_3', {
                title : 'col-3',
                image : url+'/img/col-3.png',
                onclick : function() {
                    ed.selection.setContent('[col-3]' + ed.selection.getContent() + '[/col-3]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        }
    });
    // Col-4
    tinymce.create('tinymce.plugins.col_4', {
        init : function(ed, url) {
            ed.addButton('col_4', {
                title : 'col-4',
                image : url+'/img/col-4.png',
                onclick : function() {
                    ed.selection.setContent('[col-4]' + ed.selection.getContent() + '[/col-4]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        }
    });
    // Col-5
    tinymce.create('tinymce.plugins.col_5', {
        init : function(ed, url) {
            ed.addButton('col_5', {
                title : 'col-5',
                image : url+'/img/col-5.png',
                onclick : function() {
                    ed.selection.setContent('[col-5]' + ed.selection.getContent() + '[/col-5]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        }
    });
    // Col-6
    tinymce.create('tinymce.plugins.col_6', {
        init : function(ed, url) {
            ed.addButton('col_6', {
                title : 'col-6',
                image : url+'/img/col-6.png',
                onclick : function() {
                    ed.selection.setContent('[col-6]' + ed.selection.getContent() + '[/col-6]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        }
    });
    // Col-7
    tinymce.create('tinymce.plugins.col_7', {
        init : function(ed, url) {
            ed.addButton('col_7', {
                title : 'col-7',
                image : url+'/img/col-7.png',
                onclick : function() {
                    ed.selection.setContent('[col-7]' + ed.selection.getContent() + '[/col-7]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        }
    });
    // Col-8
    tinymce.create('tinymce.plugins.col_8', {
        init : function(ed, url) {
            ed.addButton('col_8', {
                title : 'col-8',
                image : url+'/img/col-8.png',
                onclick : function() {
                    ed.selection.setContent('[col-8]' + ed.selection.getContent() + '[/col-8]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        }
    });
    // Col-9
    tinymce.create('tinymce.plugins.col_9', {
        init : function(ed, url) {
            ed.addButton('col_9', {
                title : 'col-9',
                image : url+'/img/col-9.png',
                onclick : function() {
                    ed.selection.setContent('[col-9]' + ed.selection.getContent() + '[/col-9]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        }
    });
    // Col-10
    tinymce.create('tinymce.plugins.col_10', {
        init : function(ed, url) {
            ed.addButton('col_10', {
                title : 'col-10',
                image : url+'/img/col-10.png',
                onclick : function() {
                    ed.selection.setContent('[col-10]' + ed.selection.getContent() + '[/col-10]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        }
    });
    // Col-11
    tinymce.create('tinymce.plugins.col_11', {
        init : function(ed, url) {
            ed.addButton('col_11', {
                title : 'col-11',
                image : url+'/img/col-11.png',
                onclick : function() {
                    ed.selection.setContent('[col-11]' + ed.selection.getContent() + '[/col-11]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        }
    });
    // Col-12
    tinymce.create('tinymce.plugins.col_12', {
        init : function(ed, url) {
            ed.addButton('col_12', {
                title : 'col-12',
                image : url+'/img/col-12.png',
                onclick : function() {
                    ed.selection.setContent('[col-12]' + ed.selection.getContent() + '[/col-12]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        }
    });


    /* Finally, in the last line, we add the freshly created plugin to tinyMCE's plugin manager.
    Pay attention to the names you're using in each step. */
    tinymce.PluginManager.add('row', tinymce.plugins.row);
    tinymce.PluginManager.add('col_1', tinymce.plugins.col_1);
    tinymce.PluginManager.add('col_2', tinymce.plugins.col_2);
    tinymce.PluginManager.add('col_3', tinymce.plugins.col_3);
    tinymce.PluginManager.add('col_4', tinymce.plugins.col_4);
    tinymce.PluginManager.add('col_5', tinymce.plugins.col_5);
    tinymce.PluginManager.add('col_6', tinymce.plugins.col_6);
    tinymce.PluginManager.add('col_7', tinymce.plugins.col_7);
    tinymce.PluginManager.add('col_8', tinymce.plugins.col_8);
    tinymce.PluginManager.add('col_9', tinymce.plugins.col_9);
    tinymce.PluginManager.add('col_10', tinymce.plugins.col_10);
    tinymce.PluginManager.add('col_11', tinymce.plugins.col_11);
    tinymce.PluginManager.add('col_12', tinymce.plugins.col_12);
})();