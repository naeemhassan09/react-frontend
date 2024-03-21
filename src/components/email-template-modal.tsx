
import { FunctionComponent, useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useForm } from 'react-hook-form';
import styled, { keyframes } from 'styled-components';
import {
    TextField,
    Autocomplete,
    Checkbox,
    FormControlLabel,
    
  } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getEmailTemplates } from 'src/store/selectors/entities';
import { creatEmailTemplate, updatEmailTemplate } from 'src/store/thunks';
type EmailTemplateModalProps = {
  onClose?: any;
  emailItem?: any;
};

const EmailTextField = styled(TextField)`
  border: none;
  background-color: transparent;
  align-self: stretch;
  margin-bottom: 20px;
`;

const Checkbox1 = styled(FormControlLabel)``;

const Enabled = styled.div`
  position: relative;
`;

const CheckboxParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-1xs);
  margin-bottom: 20px;

`;

const FrameAutocomplete = styled(Autocomplete)`
  align-self: stretch;
  margin-bottom: 20px;

`;

const animationSlideInRight = keyframes`
    0% {
        transform: translateX(200px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

const CreateUserModalRoot = styled.form`
  height: 100vh;
`;

const CreateWrapper = styled.button`
  border-radius: var(--br-8xs);
  background-color: var(--color-firebrick);
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-xl);
  box-sizing: border-box;
  cursor: pointer;
  border-color:  var(--color-firebrick);
  &:hover {
    background-color: var(--color-crimson);
  }
`;

const CloseContainer = styled.div`
  border-radius: var(--br-8xs);
  background-color: var(--white);
  border: 2px solid var(--color-firebrick);
  box-sizing: border-box;
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-xl);
  color: var(--color-firebrick);
  &:hover {
    background-color: var(--color-firebrick);
    color: white;
  }
`;

const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) 0px;
  gap: var(--gap-5xl);
  color: var(--white);
`;

const CreateUserName = styled.div`
  position: relative;
  font-weight: 500;
`;



const EmailTemplateModal: FunctionComponent<EmailTemplateModalProps> = ({onClose, emailItem}) => {

    const dispatch=useDispatch();

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: { errors }
      } = useForm();

  const emailTemplateData= useSelector(getEmailTemplates);
  const [triggerArray, setTriggerArray]=useState<any>([]);
  const [editorData, setEditorData]=useState<any> ();
  const [bccCheckBox, setBccCheckBox]=useState(false);
  const [isActive,setIsActive]=useState(false);

      
const onSubmit =((values: any)=>{ 

    let payload:any={};

     payload=  {
        title: values.title,
        email_subject: values.subject,
        is_cc: false,
        email_cc: '',
        is_bcc: values.BCC,
        email_bcc: values.BCC===true ? values.bcc_email:'',
        is_active: values.is_active,
        trigger: values.trigger,
        description: editorData
    };

    if (emailItem){
        payload= { ...payload, id: emailItem.id };
        dispatch(updatEmailTemplate(payload));
    }
    else
    dispatch(creatEmailTemplate(payload));
    onClose(false);
});

useEffect(()=>{

    if (emailTemplateData && emailTemplateData.length>0){
        
        const   array=    emailTemplateData.map((item: any)=>(
            item.trigger!==null && item.trigger
        ));

        setTriggerArray(array);
    }
 },[emailTemplateData]);


 useEffect(()=>{

    console.log(emailItem);

    if (emailItem)
    {
      setEditorData(emailItem.description);
      setValue('subject', emailItem.email_subject);
      setValue('title', emailItem.title);
      setValue('BCC', emailItem.is_bcc);
      setValue('is_active', emailItem.is_active);
      setIsActive(emailItem.is_active);
      setBccCheckBox(emailItem.is_bcc);
      setValue('bcc_email', emailItem.email_bcc);
      setValue('trigger',emailItem.trigger);
    }
 },[emailItem]);



 
  return (
    <div style={ { height: 'auto', backgroundColor: 'white', padding: '15px' } }>

      <CreateUserModalRoot data-animate-on-scroll onSubmit={ handleSubmit(onSubmit) }>
        <EmailTextField
            { ...register('title') } 
            color='primary'
            label='Title'
            size='small'
            placeholder='Title'
            fullWidth
            required
            variant='outlined'
            sx={ { '& .MuiInputBase-root': { height: '36px' } } }
         />
        
        <EmailTextField
            { ...register('subject') } 
            color='primary'
            label='Subject'
            size='small'
            placeholder='Subject'
            fullWidth
            required
            variant='outlined'
            sx={ { '& .MuiInputBase-root': { height: '36px' } } }
         />

        <CheckboxParent>
          <Checkbox1 
          label='' { ...register('BCC') } 
          control={ <Checkbox 
          id='small' color='primary' checked={ bccCheckBox } onChange={ ()=>setBccCheckBox(!bccCheckBox) }/> } />
          <Enabled>BCC</Enabled>
        </CheckboxParent>
        {
             bccCheckBox && <EmailTextField
             { ...register('bcc_email') } 
             color='primary'
             label='BCC Email Address'
             size='small'
             placeholder='BCC Email Address'
             fullWidth
             variant='outlined'
             sx={ { '& .MuiInputBase-root': { height: '36px' } } }
          />
        }
        <FrameAutocomplete
            size='small'
            sx={ { width: '100%' } }
            disablePortal
            options={ triggerArray }
            renderInput={ (params: any) => (
              <TextField
                { ...params }
                color='primary'
                label='Trigger'
                variant='outlined'
                placeholder=''
                helperText=''
                { ...register('trigger') }
              />
        ) } />
        <CheckboxParent>
          <Checkbox1 
          label='' { ...register('is_active') } 
          control={ <Checkbox 
          id='small' color='primary' checked={ isActive } onChange={ ()=>setIsActive(!isActive) }/>  } />
          <Enabled>Active/In Active</Enabled>
        </CheckboxParent> 
        <CKEditor
        editor={ ClassicEditor }
        data={ editorData }
        onReady={ (editor) => {
          console.log('Editor is ready to use!', editor);
        } }
        onChange={ (_, editor) => {
          const data = editor.getData();
          setEditorData(data);
        } }
        // onBlur={ (event, editor) => {
        //   console.log('Blur.', editor, event);
        // } }
        // onFocus={ (event, editor) => {
        //   console.log('Focus.', editor, event);
        // } }
      />
        <FrameParent>
          <CreateWrapper type='submit'>
            <CreateUserName>{ emailItem ? 'Update' : 'Create' }</CreateUserName>
          </CreateWrapper>
          <CloseContainer  onClick={ ()=>onClose(false) }>
            <CreateUserName>Close</CreateUserName>
          </CloseContainer>
        </FrameParent> 
      </CreateUserModalRoot>
    </div>
  );
};

export default EmailTemplateModal;