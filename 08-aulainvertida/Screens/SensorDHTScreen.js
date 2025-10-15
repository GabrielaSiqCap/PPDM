
import { View } from "react-native"
import { createStyles } from "react-native-buildstrap";
import { Carousel } from "react-native-buildstrap/src/components/Carousel";

export default function SensorDHTScreen() {

    const styles = createStyles()

    const data = [
        {
            image: "https://picsum.photos/800/400/1",
            title: "Sensores",
            description: "discritivo",
        },
        {
            image: "https://picsum.photos/800/400/1",
            title: "Sensores",
            description: "discritivo",
        },
        {
            image: "https://picsum.photos/800/400/1",
            title: "Sensores",
            description: "discritivo",
        },
    ];

    return (
        <View style={[styles.container, styles.bgToggle]}>
            <Carousel data={data} autoPlay interval={30000} />
        </View>
    );  
}