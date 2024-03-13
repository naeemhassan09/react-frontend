import {  FunctionComponent   } from 'react';
import {  CKEditor   } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

type EmailTemplateModalType = { 
  onClose?: () => void;
  };

const EmailTemplateModal: FunctionComponent<EmailTemplateModalType> = () => { 
  const editorConfiguration = { 
    plugins: [Essentials, Bold, Italic, Paragraph],
    toolbar: ['bold', 'italic'],
    };

  return (
    <div className='App'>
      <CKEditor
        editor={ ClassicEditor  }
        config={ editorConfiguration  }
        data='<p>Hello from CKEditor 5!</p>'
        onReady={ (editor) => { 
          console.log('Editor is ready to use!', editor);
          }  }
        onChange={ (event, editor) => { 
          const data = editor.getData();
          console.log({  event, editor, data   });
          }  }
        onBlur={ (event, editor) => { 
          console.log('Blur.', editor, event);
          }  }
        onFocus={ (event, editor) => { 
          console.log('Focus.', editor, event);
          }  }
      />
    </div>
  );
  };

export default EmailTemplateModal;
