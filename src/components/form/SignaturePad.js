import React, { useState, useRef, useEffect} from 'react'
import SignatureCanvas from 'react-signature-canvas'

//ui
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { useId, useBoolean } from '@uifabric/react-hooks';
import { getTheme, mergeStyleSets, FontWeights, Modal, Stack } from 'office-ui-fabric-react';

// style
const theme = getTheme();
const contentStyles = mergeStyleSets({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'stretch',
  },
  header: [
    theme.fonts.xLargePlus,
    {
      flex: '1 1 auto',
      borderTop: `4px solid ${theme.palette.themePrimary}`,
      color: theme.palette.neutralPrimary,
      display: 'flex',
      alignItems: 'center',
      fontWeight: FontWeights.semibold,
      padding: '12px 12px 14px 24px',
    },
  ],
  body: {
    flex: '4 4 auto',
    padding: '0 24px 24px 24px',
    overflowY: 'hidden',
    selectors: {
      p: { margin: '14px 0' },
      'p:first-child': { marginTop: 0 },
      'p:last-child': { marginBottom: 0 },
    },
  },
});

const stackTokens = { childrenGap: 20 };


function SignaturePad(props) {
    const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);
    const [imageURL, setImageURL] = useState(null);
    const sigCanvas = useRef({});

    const clear = () => sigCanvas.current.clear();
    const save = () => {
        setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'));
        hideModal()
    }

    useEffect(()=>{
        props.setImageURL(imageURL);
    });

    const titleId = useId('title');

    return (
        <>
            <DefaultButton secondaryText="Opens the Sample Dialog" onClick={showModal} text="Signature Pad" />
            <Modal
                titleAriaId={titleId}
                isOpen={isModalOpen}
                onDismiss={hideModal}
                containerClassName={contentStyles.container}
            >
                <div className={contentStyles.header}>
                  <span id={titleId}>Signature Pad</span>
                </div>
                <div className={contentStyles.body}>
                    <p>
                        Put your signature and press save button
                    </p>
                    <SignatureCanvas 
                        ref={sigCanvas} 
                        penColor='black' 
                        canvasProps={{width: 500, height: 200, className: 'sigCanvas'}} 
                    />
                    <Stack horizontal tokens={stackTokens}>
                        <PrimaryButton text="Save" onClick={save} allowDisabledFocus />
                        <DefaultButton text="Clear" onClick={clear} allowDisabledFocus />
                    </Stack>
                </div>
            </Modal>
        </>
    )
}

export default SignaturePad
