require('../css/form-type-code-editor.css');

import CodeMirror from 'codemirror';

import 'codemirror/mode/css/css';
import 'codemirror/mode/dockerfile/dockerfile';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/nginx/nginx';
import 'codemirror/mode/php/php';
import 'codemirror/mode/shell/shell';
import 'codemirror/mode/sql/sql';
import 'codemirror/mode/twig/twig';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/yaml-frontmatter/yaml-frontmatter';
import 'codemirror/mode/yaml/yaml';

document.querySelectorAll('[data-easyadmin-code-editor]').forEach(function(codeBlock) {
    CodeMirror.fromTextArea(codeBlock, {
        autocapitalize: false,
        autocorrect: false,
        indentWithTabs: codeBlock.dataset.indentWithTabs,
        lineNumbers: true,
        lineWrapping: true,
        mode: codeBlock.dataset.language,
        scrollbarStyle: 'native',
        spellcheck: false,
        tabSize: codeBlock.dataset.tabSize,
        theme: 'default',
    });
});
