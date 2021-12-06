import React, { useState } from 'react'
import { Box, Text, View, ScrollView, Pressable, Modal, Button, VStack, FormControl, Input } from 'native-base';

import { useDispatch } from 'react-redux';
import pieceActions from '../../store/piece/actions';
import DefaultBtn from '../DefaultBtn';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const AddExhibitionModal = ({ from, wrapperWidth }) => {
  const isFromMyPage = from === "MyPage"
  const [mode, setMode] = useState(isFromMyPage ? "create" : "view");
  const [isOpen, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const dispatch = useDispatch();

  const nameInput = {
    value: name,
    onChangeText: (text) => setName(text),
  }

  const descInput = {
    value: desc,
    onChangeText: (text) => setDesc(text),
  };

  const onPressCreateBtn = () => {
    dispatch(pieceActions.postExhibition({ name, desc }))
    if (isFromMyPage) {
      setOpen(false)
    }
    else {
      setMode("view");

    }
  }


  const viewMode = () => {
    return (
      <Modal isOpen={isOpen} onClose={() => setOpen(false)} >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>
            Which Exhibition?
          </Modal.Header>
          <Modal.Body>
            <ScrollView>
              <VStack space={5}>
                <Text>
                  Gallery 1
                </Text>
                <Text>
                  Gallery 2
                </Text>
                <Text>
                  Gallery 3
                </Text>
                <Text>
                  Gallery 4
                </Text>
              </VStack>
              <Pressable onPress={() => setMode('create')}>
                {({ isHovered, isPressed }) => {
                  return (
                    <Box
                      bg={isPressed ? "rgb(243, 244, 246)" : isHovered ? "rgb(243, 244, 246)" : "rgb(249, 250, 251)"}
                      paddingTop='10px'
                      paddingBottom='10px'
                      marginTop='10px'
                    >
                      <Text fontSize='16px' color="#ABA9A1">+ Create New Exhibition</Text>
                    </Box>
                  )
                }}
              </Pressable>
            </ScrollView >
          </Modal.Body>
          <Modal.Footer>
            <DefaultBtn text="Exhibit" onPressBtn={() => setOpen(false)} disabled={false} />
          </Modal.Footer>
        </Modal.Content>
      </Modal >
    )
  };

  const createMode = () => {
    return (
      <Modal isOpen={isOpen} onClose={() => setOpen(false)} >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>
            Create New Exhibition
          </Modal.Header>
          <Modal.Body>
            <Text>Exhibition Name</Text>
            <Input {...nameInput} />
            <Text>Exhibition Description</Text>
            <Input {...descInput} />
          </Modal.Body>
          <Modal.Footer>
            <DefaultBtn text="Create" onPressBtn={() => onPressCreateBtn({ name, desc })} disabled={false} />
          </Modal.Footer>
        </Modal.Content>
      </Modal >
    )
  }



  const renderOpenComponent = () => {
    switch (from) {
      case "MyPage":
        return (
          <TouchableWithoutFeedback onPress={() => setOpen(true)}>
            <View style={{ width: wrapperWidth / 2, paddingLeft: 10, paddingRight: 5, paddingTop: 10, paddingBottom: 10 }}>
              <Box style={{ borderWidth: 3, height: 200 }}>
                <Text>추가하기</Text>
              </Box>
            </View>
          </TouchableWithoutFeedback>

        )
      default:
        return (<DefaultBtn text="Bring in to my gallery" onPressBtn={() => setOpen(true)}></DefaultBtn>)
    }
  }



  return (
    <>
      {renderOpenComponent()}
      {
        mode === 'create'
          ?
          (
            createMode()
          )
          :
          viewMode()
      }
    </>
  )
}

export default AddExhibitionModal;