import './bootstrap.js'
import CMS, { init } from 'netlify-cms'
import 'netlify-cms/dist/cms.css'
import {
  RelationsControl,
  RelationsPreview
} from '../src'

const config = {
  backend: {
    name: 'test-repo',
    login: false,
  },
  media_folder: 'assets',
  collections: [
    {
    name: 'test',
    label: 'Test',
    files: [{
      file: 'test.yml',
      name: 'test',
      label: 'Test',
      fields: [{
        name: 'relations_widget',
        label: 'Relations Widget',
        widget: 'relations'
      }, ],
    }],
  },
  {
    name: 'blocks',
    label: 'Blocks',
    files: [
      {file: 'wysiwyg-abcdefg1234567890.yml',
       name: 'wysiwyg-block__about-us',
       label: 'About Us [block][wysiwyg]',
       fields: [
         {
           name: 'title',
           label: 'title',
           widget: 'string'
         },
         {name: 'content',
          label: 'content',
          widget: 'markdown'}
       ]
      }
    ]
  }
],
}

CMS.registerWidget('relations', RelationsControl, RelationsPreview)

init({ config })
