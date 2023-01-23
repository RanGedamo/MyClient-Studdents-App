import { ImageBackground, Text, TextInput, View } from 'react-native';
import InstaStory from 'react-native-insta-story';
// import Story from 'react-native-story'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useState } from 'react';
import Tab from '../component/Route/Tab/Tab';
import { PopMenu } from '../component/features/PopMenu/popMenu';

export default function Story() {
    const [like, setLike] = useState(false)
    const [send, setSend] = useState(false)
    // const data = [
    //     {
    //         user_id: 1,
    //         user_image: 'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
    //         user_name: "Ran Gedamo",
    //         stories: [
    //             {
    //                 story_id: 1,
    //                 story_image: "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
    //                 onPress: () => console.log('story 1 swiped'),
    //             },
    //             {
    //                 story_id: 2,
    //                 story_image: "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
    //                 onPress: () => console.log('story 2 swiped'),
    //             },
    //             {
    //                 story_id: 3,
    //                 story_image: "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
    //                 onPress: () => console.log('story 3 swiped'),
    //             },
    //             {
    //                 story_id: 4,
    //                 story_image: "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
    //                 onPress: () => console.log('story 3 swiped')
    //             }
    //         ]
    //     },
    //     {
    //         user_id: 2,
    //         user_image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    //         user_name: "Test User",
    //         stories: [
    //             {
    //                 story_id: 1,
    //                 story_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU",
    //                 swipeText: 'Custom swipe text for this story',
    //                 onPress: () => console.log('story 1 swiped'),
    //             },
    //             {
    //                 story_id: 2,
    //                 story_image: "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg",
    //                 swipeText: 'Custom swipe text for this story',
    //                 onPress: () => console.log('story 2 swiped'),
    //             }
    //         ]
    //     },

    // ];
    const data = [
        {
            user_id: 1,
            user_image: 'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
            user_name: "Team",
            stories: [
                {
                    story_id: 1,
                    story_image: "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
                    onPress: () => console.log('story 1 swiped'),
                },
                {
                    story_id: 2,
                    story_image: "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
                    onPress: () => console.log('story 2 swiped'),
                },
                {
                    story_id: 3,
                    story_image: "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
                    onPress: () => console.log('story 3 swiped'),
                },
                {
                    story_id: 4,
                    story_image: "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
                    onPress: () => console.log('story 3 swiped')
                }
            ]
        },
    ]


    //// ----- Find And Update ----- ///

    const userName = data.find(name => name.user_name == "Team")
    const userIndex = data.indexOf(userName)
    console.log(userIndex);
    data[userIndex].stories = [{
        story_id: 1,
        story_image: "https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg",
        onPress: () => console.log('story 1 swiped'),
    }]
    data[userIndex].stories.push({
        story_id: 2,
        story_image: "https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg",
        onPress: () => console.log('story 1 swiped'),
    })
    //// ----- Find And Update ----- ///

    return (
        <View>
            <ImageBackground source={{uri:"https://static.wixstatic.com/media/e04fc3_fcc2ddec0860460a923455c44a560dc8~mv2.jpeg/v1/fill/w_1125,h_572,al_c,q_85,enc_auto/e04fc3_fcc2ddec0860460a923455c44a560dc8~mv2.jpeg"}} resizeMode="cover" style={{height:200}}>
                <View style={{
                paddingTop: 30, shadowColor: '#171717',
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
            }}>
                <View style={{alignItems:"flex-end",paddingRight:15}}>

                    <PopMenu />
                </View>
                <View style={{ alignItems: "center", marginTop:58,marginLeft:7 }}>
                    <InstaStory data={data}
                        avatarTextStyle={{ fontWeight: "bold" }}
                        // duration={10}
                        onStart={item => console.log(item)}
                        onClose={item => console.log('close: ', item)}
                        customSwipeUpComponent={<View style={{ display: "flex", flexDirection: "row", border: "solid 1px black" }}>
                            <View style={{ width: 25, height: 25, marginRight: 12, marginTop: -22 }}>
                                <AntDesign name={like ? "heart" : 'hearto'} size={25} color={like ? "red" : ""} onPress={() => like ? setLike(false) : setLike(true)} />
                            </View>
                            <View style={{ marginTop: -25 }} >
                                <TextInput
                                    placeholder="Send message"
                                    // placeholderTextColor="white"
                                    style={{ padding: 8, width: 240, height: 30, backgroundColor: "white", opacity: 0.8, borderBottomLeftRadius: 14, borderTopLeftRadius: 14, fontWeight: "bold" }} />
                            </View>
                            <View style={{ backgroundColor: "white", width: 40, height: 30, marginTop: -25, opacity: 0.8, borderBottomRightRadius: 14, borderTopRightRadius: 14 }}>
                                <FontAwesome name={send ? 'send' : "send-o"} size={25} style={{ marginTop: 2 }} onPress={() => send ? setSend(false) : setSend(true)} />
                            </View>
                        </View>
                        }
                        style={{ marginTop: 30 }} />
                </View>
            </View>
            </ImageBackground>
            


        </View>
    )
}
