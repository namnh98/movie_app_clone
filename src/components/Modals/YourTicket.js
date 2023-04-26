import { Text, View, Image } from "react-native";
import React from "react";
import styles from "./YourTicketStyle";
import Ticket from "../ticket/Ticket";
import SelectSeatsBar from "../TopBar/SelectSeatsBar";
import MoviesType from "../about/MoviesType";
import Button from "../Button/Button";
import { useNavigation } from "@react-navigation/native";
const TicketInfo = {
    Cinema: "Eurasia Cinema7",
    Date: "6 April 2022, 14:40",
}
const YourTicket = ({ obj, MovieName }) => {

    const navigation = useNavigation()

    const topContent = () => {
        return (
            <View style={styles.content1}>
                <Image
                    source={require('../../assets/img/QR/Code.png')}
                    style={{ borderRadius: 10 }} />
                <Text style={styles.SubTitle}>Show this code to the gatekeeper at the cinema</Text>
            </View>
        )
    }
    const bottomContent = () => {
        return (
            <React.Fragment>
                <Text style={styles.Title}>{MovieName || 'err'}</Text>
                <MoviesType obj={obj || {}} />
                <View style={styles.coupleBtn}>
                    <Button
                        style={[styles.Button, { borderWidth: 1, borderColor: 'rgba(109, 158, 255, 0.1)' }]}
                        TypeTagChild={'Text'}
                        ContentStyle={styles.Title}
                        content={'Refund'}
                    />
                    <Button
                        style={[styles.Button, { backgroundColor: 'rgba(255, 128, 54, 1)' }]}
                        TypeTagChild={'Text'}
                        ContentStyle={styles.Title}
                        content={'Send'}
                    />
                </View>
            </React.Fragment>
        )
    }
    return (
        <Ticket
            renderTopBar={
                <SelectSeatsBar
                    content={"Your Ticket"}
                    mode={"none_date"}
                    PatchImageRight={require('../../assets/img/icons/closeMedium.png')}
                    BtnRightOnPress={() => navigation.goBack()}
                    ishideLeftBtn={false}
                />
            }
            renderContentTop={topContent()}
            renderContentBottom={bottomContent()}
        />
    );
};

export default YourTicket;
