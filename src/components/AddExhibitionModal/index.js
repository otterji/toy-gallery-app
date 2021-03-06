import React, { useEffect, useState } from 'react'
import { Box, Text, View, ScrollView, Pressable, Modal, Flex, VStack, Icon, Input, Center, Toast, useToast } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { AntDesign } from "@expo/vector-icons"
import DefaultBtn from '../DefaultBtn';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import galleryActions from '../../store/gallery/actions';


const AddExhibitionModal = ({ from, wrapperWidth, pieceId }) => {
  const toast = useToast()
  const { postGalGroupLoading, myGalleryList, postGalPieceLoading } = useSelector(state => state.galleryReducer || initialState);
  const isFromMyPage = from === "MyPage"
  const [mode, setMode] = useState(isFromMyPage ? "create" : "view");
  const [isOpen, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [curList, setCurList] = useState([]);
  const [galleryList, setGalleryList] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const dispatch = useDispatch();

  const onCloseHandler = () => {
    setOpen(false);
    setName('');
    setDesc('');
  }

  const nameInput = {
    value: name,
    onChangeText: (text) => setName(text),
  }

  const descInput = {
    value: desc,
    onChangeText: (text) => setDesc(text),
  };

  const onPressCreateBtn = () => {
    dispatch(galleryActions.postGalleryGroup({ name, desc, callback: isFromMyPage ? () => onCloseHandler() : () => setMode('view') }));
  };

  useEffect(() => {
    return () => {
      setName('');
      setDesc('');
    };
  }, []);

  useEffect(() => {
    dispatch(galleryActions.getMyGalleryList());
  }, [])

  useEffect(() => {
    if (myGalleryList.length === 0) return;
    setGalleryList(myGalleryList);
  }, [myGalleryList])

  const exhibit = () => {
    dispatch(galleryActions.postGalleryPiece({
      pieceId,
      galleryId: selectedId,
      callback: () => {
        setOpen(false);
      },
    }));

  };




  const viewMode = () => {
    return (
      <Modal isOpen={isOpen} onClose={onCloseHandler} >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>
            Which Exhibition?
          </Modal.Header>
          <Modal.Body>
            <ScrollView>
              <VStack>
                {
                  galleryList.map((x) => {
                    const isSelected = x.id === selectedId;
                    return (
                      <Pressable key={`gallery-modal-${x.id}`} onPress={() => setSelectedId(x.id)} backgroundColor={isSelected ? "rgb(243, 244, 246)" : "rgb(249, 250, 251)"}>
                        <Box
                          paddingTop='10px'
                          paddingBottom='10px'
                        >
                          <Text>
                            {x.name}
                          </Text>
                        </Box>
                      </Pressable>
                    )
                  }
                  )
                }
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
            <DefaultBtn text={postGalPieceLoading ? "loading..." : "Exibit"} onPressBtn={() => exhibit()} disabled={postGalPieceLoading} />
          </Modal.Footer>
        </Modal.Content>
      </Modal >
    )
  };

  const createMode = () => {
    return (
      <Modal isOpen={isOpen} onClose={onCloseHandler} >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>
            Create New Exhibition
          </Modal.Header>
          <Modal.Body>
            <Text>Exhibition Name</Text>
            <Input {...nameInput}  />
            <Text>Exhibition Description</Text>
            <Input {...descInput} multiline minHeight={100} textAlignVertical='top'/>
          </Modal.Body>
          <Modal.Footer>
            <DefaultBtn text={postGalGroupLoading ? "Loading..." : "Create"} onPressBtn={() => onPressCreateBtn({ name, desc })} disabled={postGalGroupLoading} />
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
              <Center style={{ height: 170, borderRadius: 10, borderColor: "#D5C9A5", borderWidth: 2, borderStyle: 'dashed' }}>
                <Flex>
                  <Icon color="#D5C9A5" as={<AntDesign name="pluscircleo" />} size="lg" ml={5}/>
                  <Text color="#6B4B37" fontFamily="Roboto_400Regular" mt={1}>Add Exhibition</Text>
                </Flex>
              </Center>
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