import { StyleSheet } from "react-native";

import { fontFamily } from "./font";
import { ColorsConstant } from "./Colors.constant";
import { screenHeight, screenWidth } from "./Sizes.constant";
import { currentTheme } from "./ThemeProvider";

export const c = ColorsConstant,
    StyleConstants = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: currentTheme().bgColor,
            alignItems: "center",
            paddingHorizontal: 10,
        },
        innerContainer: {
            // backgroundColor: "red",
            marginHorizontal: 10,
            marginVertical: 5,
        },
        innerButtonContainer: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 5,
        },
        userOtherDetailsText: {
            // color: ColorsConstant.Black,
            color: currentTheme().red,
            fontSize: 14,
            // fontWeight: "bold",
            // paddingLeft: 3,
            paddingHorizontal: 10
        },
        outerContainer: {
            marginBottom: 60,
        },
        buttonContainer: {
            backgroundColor: currentTheme().themeColor,
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 8,
            height: 40,
            marginVertical: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
        },
        cardContainer: {
            // backgroundImage: url("./../../../asstes/background/cardBackground.png"),
            flexDirection: "row",
            marginHorizontal: 10,
            marginBottom: 10,
            borderWidth: 1,
            borderColor: currentTheme().borderColor,
            backgroundColor: currentTheme().inputTextBackground,
            borderRadius: 5,
            padding: 5,
            opacity: 0.8
            // shadowColor: "#000",
            // shadowOffset: {
            //     width: 0,
            //     height: 4,
            // },
            // shadowOpacity: 0,
            // shadowRadius: 4.65,
            // elevation: 8,
        },
        cardCenterContainer: {
            paddingHorizontal: 10,
            flexDirection: "column",
            flex: 1,
        },
        cardTextContainer: { flexDirection: "row" },
        documentTypeContainer: {
            flexDirection: "row",
            paddingVertical: 5,
        },
        viewButtonContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 1
        },
        searchContainer: {
            paddingVertical: 5,
        },
        searchInnerContainer: {
            marginHorizontal: 10,
        },
        // text
        cardCenterHeadText: {
            color: currentTheme().textColor,
            fontWeight: "bold",
            fontSize: 15,
        },
        cardCenterText: {
            color: currentTheme().textColor,
            paddingHorizontal: 10,
        },
        defaultText: {
            color: currentTheme().Black,
            // backgroundColor: "red",
        },
        buttonText: {
            color: currentTheme().White,
            fontSize: 15,
            fontWeight: "bold",
        },
        modalLayer: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        },
        label: {
            fontSize: 15,
            fontWeight: "bold",
            color: currentTheme().textColor,
        },
        text: {
            color: currentTheme().textColor,
        },
        Textinput: {
            height: 45,
            marginTop: 5,
            width: "100%",
            borderRadius: 10,
            // borderRadius: 5,
            paddingHorizontal: 10,
            // borderColor: currentTheme().Dark,
            borderColor: currentTheme().borderColor,
            backgroundColor: currentTheme().inputTextBackground,
            borderWidth: 1,
            justifyContent: "center",
            opacity: 0.75
        },

        sidebarOuterContainer: {
            flex: 1,
            paddingBottom: 10,
            backgroundColor: currentTheme().bgColor,
        },
        TextinputDisable: {
            width: "100%",
            height: 40,
            marginVertical: 5,
            borderRadius: 5,
            paddingHorizontal: 10,
            color: "red",
            backgroundColor: currentTheme().lightGray,
            // placeholderTextColor: "red",
            borderColor: currentTheme().themeColor,
            borderWidth: 1,
            justifyContent: "center",
        },
        searchBoxContainer: {
            marginHorizontal: 10,
        },
        // cardContainer: {
        //     // flex: 1,
        //     marginHorizontal: 10,
        //     marginVertical: 5,
        //     borderWidth: 1,
        //     borderColor: currentTheme().Black,
        //     backgroundColor: currentTheme().cardBackground,
        //     // backgroundColor: "#9ED2C6",
        //     borderRadius: 5,
        //     // flexDirection: "row",
        //     padding: 5,
        //     // shadowColor: "#000",
        //     // shadowOffset: {
        //     //   width: 0,
        //     //   height: 4,
        //     // },
        //     // shadowOpacity: 0,
        //     // shadowRadius: 4.65,
        //     // elevation: 8,
        // },
        btnoutline: {
            borderWidth: 1,
            width: screenWidth - 32,
            // flex: 1,
            height: 50,
            borderRadius: 8,
            paddingHorizontal: 15,
            borderColor: currentTheme().White,
            // marginTop: 16
            marginBottom: 16,
        },
        RowView: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        },
        icon: {
            height: 20,
            width: 20,
        },
        textsigup: {
            color: currentTheme().White,
            fontWeight: "bold",
            // fontSize: 15,
        },
        bottunth: {
            backgroundColor: currentTheme().textColor,
            borderRadius: 50,
            height: 40,
            justifyContent: "center",
            width: screenWidth / 2.5,
        },
        errText: {
            color: currentTheme().Error,
            fontSize: 12,
            fontFamily: fontFamily.Regular,
            // marginTop: -10,
            // marginLeft: 50,
            fontWeight: "bold",
            width: screenWidth - 32,
        },
        ImageI: {
            width: 15,
            height: 15,
        },
        cardViewkyc: {
            marginTop: 25,
            backgroundColor: c.cardligth,
            paddingVertical: 20,
            paddingHorizontal: 5,
            borderRadius: 10,
            elevation: 5,
        },
        TextBold: {
            color: currentTheme().Black,
            fontSize: 18,
            fontFamily: fontFamily.semiBold,
        },
        // modal style start
        modalManView: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        },
        modalbg: {
            backgroundColor: c.DarkLight,
            opacity: 1,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        },
        cardModalView: {
            width: screenWidth / 1 - 20,
            marginHorizontal: 50,
            borderColor: currentTheme().Primary,
            backgroundColor: currentTheme().inputTextBackground,
            shadowColor: "black",
            shadowOffset: { width: 2, height: 1 },
            shadowRadius: 6,
            shadowOpacity: 0.26,
            elevation: 8,
            borderRadius: 10,
        },
        modalHeaderContainer: {
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: currentTheme().themeColor,
            height: 50,
            borderTopLeftRadius: 10,
            borderTopEndRadius: 10,
            padding: 10,
        },
        modalHeaderText: {
            color: currentTheme().White,
            fontSize: 18,
            fontWeight: "bold",
        },
        modalCloseIconContainer: {
            padding: 5,
            alignSelf: "flex-end",
            justifyContent: "center",
            borderRadius: 50,
        },
        modalCloseIcon: {
            height: 20,
            width: 20,
            tintColor: currentTheme().White,
        },
        modalInnerViewContainer: { padding: 10 },
        // modal style finish
        cardView: {
            marginHorizontal: 10,
            borderColor: currentTheme().borderColor,
            // backgroundColor: currentTheme().White,
            // shadowColor: "black",
            // shadowOffset: { width: 2, height: 1 },
            // shadowRadius: 6,
            // shadowOpacity: 0.26,
            // elevation: 8,
            borderRadius: 10,
            opacity: 0.8
        },
        // cameraOptionModalOuterView: {
        //     padding: 0,
        //     width: screenWidth,
        //     backgroundColor: currentTheme().themeColor,
        //     justifyContent: "space-between",
        //     flexDirection: "row",
        //     borderTopRightRadius: 15,
        //     borderTopLeftRadius: 15,
        //     flexDirection: "column"
        // },
        cameraOptionModalInnerView: {
            // borderBottomWidth: 1,
            // borderBottomColor: currentTheme().themeColor,
            backgroundColor: currentTheme().lightGray,
            borderRadius: 5,
            marginVertical: 5,
            flexDirection: "row",
            padding: 15
        },
        cameraOptionModalIcon: {
            height: 20,
            width: 20,
            resizeMode: "cover",
            marginHorizontal: 10,
            tintColor: currentTheme().Black
        },
        cameraOptionModalText: {
            color: currentTheme().Black,
            paddingHorizontal: 10
        },
        modalView: {
            backgroundColor: c.White,
            borderRadius: 1,
            padding: 10,
            width: screenWidth - 20,
        },
        textStylemodal: {
            color: c.Black,
            padding: 10,
            fontFamily: fontFamily.medium,
        },
        textitem: {
            color: c.themeColor,
            fontSize: 12,
            fontFamily: fontFamily.medium,
        },
        textStyle: {
            color: c.Black,
        },
        poweredByText: {
            fontWeight: "bold",
            letterSpacing: 1,
            fontSize: 10
        },
        codeFieldRoot: {
            marginVertical: 40,
            width: screenWidth - 100,
            alignSelf: "center",
        },
        cell: {
            borderRadius: 10,
            padding: 12,
            height: 55,
            width: 55,
            fontSize: 20,
            borderColor: currentTheme().borderColor,
            backgroundColor: currentTheme().inputTextBackground,
            // borderWidth: 0.6,
            borderWidth: 1,
            // borderColor: currentTheme().bgColor,
            color: currentTheme().textColor,
            // backgroundColor: currentTheme().bgColor,
            margin: 2,
            textAlign: "center",
        },
        focusCell: {
            backgroundColor: currentTheme().bgColor,
            opacity: 0.7,
            color: currentTheme().textColor
        },
        securityCheck: {
            width: 35,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
        },
        // alert start
        alertText: {
            color: "red",
            fontWeight: "bold",
        },
        // attachement image start
        attachementImage: {
            width: 50,
            height: 50,
        },
        // radio button start
        selected: {
            backgroundColor: currentTheme().themeColor,
            color: currentTheme().White,
            paddingHorizontal: 20,
            paddingVertical: 5,
            marginRight: 10,
            borderRadius: 50,
        },
        unSelected: {
            borderWidth: 1,
            borderColor: currentTheme().themeColor,
            color: currentTheme().themeColor,
            paddingHorizontal: 20,
            paddingVertical: 5,
            marginRight: 10,
            borderRadius: 50,
        },
        // action button container style
        actionButtonContainer: {
            // backgroundColor: currentTheme().textColor,
            paddingVertical: 8,
            paddingHorizontal: 10,
            justifyContent: "space-between",
            flexDirection: "row",
            marginHorizontal: 10,
            marginVertical: 5,
            borderRadius: 3,
            alignItems: "center",
        },
        actionButtonText: {
            color: currentTheme().textColor,
            fontSize: 16,
            fontWeight: "bold",
        },
        // date
        selectDateContainer: {
            justifyContent: "space-between",
            backgroundColor: currentTheme().inputTextBackground,
            paddingHorizontal: 5,
            paddingVertical: 5,
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: currentTheme().borderColor,
            borderRadius: 10,
            height: 45,
            opacity: 0.75
        },
        selectDate: {
            color: currentTheme().textColor,
            paddingHorizontal: 10,
            opacity: 0.9
        },
        selectDateIcon: {
            marginHorizontal: 5,
            width: 15,
            height: 15,
            tintColor: currentTheme().textColor,
            justifyContent: "flex-end",
            opacity: 0.9
        },
        selectDateImageOuterContainer: {
            flexDirection: "row",
            paddingVertical: 7,
        },
        selectDateImageContainer: {
            borderWidth: 1,
            borderColor: currentTheme().themeColor,
            borderRadius: 5,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            height: 100,
            marginHorizontal: 2,
        },
        floatingIcon: {
            position: 'absolute',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            right: 20,
            bottom: 20,
            borderRadius: 50,
            color: currentTheme().White,
            backgroundColor: currentTheme().themeColor
        },












        // new design add
        companyInfoContainer: {
            marginTop: -45, marginBottom: -10
        },
        mainButtonContainer: {
            // backgroundColor: currentTheme().textColor,
            backgroundColor: currentTheme().textColor,
            borderRadius: 10,
            height: 40,
            justifyContent: "center",
            width: screenWidth / 1 - 20,
        },
        mainButtonText: {
            color: currentTheme().bgColor,
            fontWeight: "bold",
            fontFamily: fontFamily.semiBold,
            textAlign: "center",
        },
        authHeadText: {
            alignSelf: "center",
            color: currentTheme().textColor,
            fontSize: 18,
            padding: 10,
            fontWeight: "bold"
        },
        sessionLogout: { padding: 10, alignSelf: "flex-end" },
        companyLogo: {
            height: 80,
            resizeMode: "contain",
            marginVertical: 20
        },
        logoContainer: {
            height: 150,
            justifyContent: "center",
        },
        loginCompanyLogo: {
            width: 200,
            height: 100,
            margin: 80,
            resizeMode: "contain",
        },

        // collection list        
        collectionBoxContainer: {
            marginHorizontal: 10,
            marginVertical: 3,
            borderRadius: 7,
            borderWidth: 1,
            borderColor: currentTheme().borderColor,
            paddingHorizontal: 10,
            paddingVertical: 5,
            opacity: 0.75
        },
        collectionBoxOuterContainer: {
            flexDirection: "row",
            alignItems: "center",
            borderBottomWidth: 1,
            borderColor: currentTheme().textColor, //for light border
            paddingBottom: 5,
        },
        collectionBoxImageContainer: {
            // paddingRight: 10,
        },
        userProfile: {
            width: 40,
            height: 40,
            // borderWidth: 1,
            // borderColor: ColorsConstant.themeColor,
            borderRadius: 100,
            // tintColor: currentTheme == 'dark' ? currentTheme().lightGray : currentTheme().Black
        },
        collectionBoxUpperDetails: {
            paddingHorizontal: 20,
            paddingBottom: 5,
        },
        userNameText: {
            color: currentTheme().textColor,
            fontSize: 15,
            fontWeight: "bold",
            letterSpacing: 1,
        },
        collectionMiddleboxOuter: {
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 5
        },
        collectionBoxMiddleContainer: {
            // width: screenWidth / 2,
        },
        userOtherDetailsContainer: {
            borderRadius: 100,
            // paddingVertical: 1,
            // paddingHorizontal: 5,
            flexDirection: "row",
            alignItems: "center",
        },
        userOtherDetailsIcon: {
            width: 15,
            height: 15,
            // tintColor: ColorsConstant.themeColor,
        },
        collectionProductContainer: {
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            fontSize: 5,
            // borderTopWidth: 0.9,
            borderColor: ColorsConstant.lightGray,
            // marginVertical: 10
        },
        followUpText: {
            color: currentTheme().bgColor,
            fontSize: 14,
            padding: 3,
            fontWeight: "bold",
        },
        tabOuterContainer: {
            // borderWidth: 1,
            // borderColor: currentTheme().textColor,
            borderRadius: 50,
            backgroundColor: currentTheme().inputTextBackground,
            margin: 10,
            padding: 2,
            flexDirection: "row",
            justifyContent: "space-between",
        },
        tabContainer: {
            paddingHorizontal: 10,
            paddingVertical: 5,
            marginHorizontal: 5,
            flex: 1,
        },
        tabText: {
            color: currentTheme().textColor,
            alignSelf: 'center',
            paddingHorizontal: 10,
            paddingVertical: 5,
            fontWeight: "bold",
        },
        tabContainerActive: {
            flex: 1,
            borderWidth: 1,
            backgroundColor: currentTheme().textColor,
            borderRadius: 50,
            paddingHorizontal: 8,
            paddingVertical: 5,
        },
        tabTextActive: {
            color: currentTheme().bgColor,
            fontWeight: "bold",
            alignSelf: 'center',
            paddingHorizontal: 15,
            paddingVertical: 5
        },
        modalOuterContainer: {
            alignItems: "center",
        },
        upiCustomerInfoOuterContainer: {
            // paddingHorizontal: 10,
            paddingVertical: 10
        },
        upiCustomerNameText: {
            backgroundColor: ColorsConstant.gary,
            color: ColorsConstant.Black,
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 17,
        },
        upiIdText: {
            backgroundColor: ColorsConstant.White,
            color: ColorsConstant.Black,
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 17
        },
        CollectionMiddleContainer: { marginHorizontal: 0, marginTop: 10 },
        CollectionMiddleHeaderContainer: {
            flex: 1,
            flexDirection: "row",
            alignContent: "center",
            // backgroundColor: "#C0EEE2",
            // backgroundColor: "red",
        },
        CollectionMiddleDetailsTextLabel: {
            color: "#000",
            borderWidth: 1,
            borderColor: currentTheme().borderColor,
            fontSize: 14,
            paddingVertical: 10,
            paddingHorizontal: 10,
            justifyContent: "center",
            alignItems: "center",
            width: 170,
            fontWeight: "bold",
        },
        CollectionMiddleHeaderText: {
            fontWeight: "bold",
            borderWidth: 1,
            borderColor: currentTheme().borderColor,
            paddingVertical: 10,
            paddingHorizontal: 10,
            textAlign: "right",
            flex: 1,
            color: currentTheme().textColor,
        },
        loginFeeInnerContainer: {
            marginHorizontal: 10,
            marginVertical: 5,
            padding: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: currentTheme().borderColor,
            // backgroundColor: ColorsConstant.White,
            // elevation: 10,
            // shadowColor: "#171717",
            opacity: 0.8
        },
        headText: {
            color: currentTheme().textColor
        },
        dataText: {
            color: currentTheme().textColor
        }
    });