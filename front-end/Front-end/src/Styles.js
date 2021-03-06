import {StyleSheet} from 'react-native';

export const colors = {
    mainTheme: '#ff5456',
    mainThemeDim: '#b33b3c',
    davysGrey: '#525252',
    gainsboro: '#E6E6EA',
    pacificBlue: '#009FB7',
    pacificBlueDim: '#006f80',
    yellowMunsel: '#F49F0A',
    yellowMunselDim: '#ab6f07',
    lightSeaGreen: '#00A6A6',
    lightSeaGreenDim: '#007474',
    purpureus: '#9D44B5',
};

const styles = StyleSheet.create({
    // Loading Screen
    loadingScreen: {
        flex: 1,
        backgroundColor: colors.gainsboro,
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Main App Container
    appContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    // LOGIN SECTION
    loginContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.gainsboro,
    },
    loginTabView: {
        display: 'flex',
        width: '100%',
        height: '60%',
        backgroundColor: colors.davysGrey,
        borderRadius: 10,
        elevation: 3,
    },
    heartIcon: {
        height: 100,
        width: 100,
        marginBottom: '10%',
    },
    loginWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '85%',
        width: '87.5%',
        marginTop: '10%',
    },
    loginArea: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
    },
    loginInput: {
        // flex: 1,
        height: 50,
        fontSize: 18,
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 10,
        backgroundColor: 'white',
        marginBottom: 20,
        color: '#333',
        borderRadius: 10,
        alignItems: 'center',
        // for all login inputs
        alignSelf: 'stretch',
    },
    loginPasswordInput: {flex: 1, fontSize: 18, color: '#333'},
    inputFields: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch',
    },
    loginButton: {
        width: '50%',
        backgroundColor: colors.mainTheme,
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 5,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: 2,
    },
    forgotPwd: {
        color: 'white',
        textDecorationLine: 'underline',
        alignSelf: 'flex-end',
    },
    forgotPwdBack: {
        width: 35,
        height: 35,
        borderRadius: 35,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    doctorFields: {marginTop: 20},
    loginIcons: {},
    // RECORD SECTION
    smoothShadow: {
        borderRadius: 12,
        backgroundColor: 'white',
        padding: 12,
        color: 'black',
        // iOS shadow
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        // android shadow
        elevation: 2,
    },
    container: {
        backgroundColor: '#eeeeee',
        flex: 1,
        paddingHorizontal: '5%',
        paddingTop: '5%',
    },
    countdownModal: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    countdownText: {fontSize: 54, color: 'white', fontWeight: '600'},
    recordButton: {
        height: 75,
        width: 75,
        display: 'flex',
        backgroundColor: '#ff2e31',
        borderRadius: 75 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    timer: {
        fontSize: 48,
        color: '#333',
    },
    recordArea: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffa0a1',
        alignItems: 'center',
        padding: '5%',
        borderRadius: 10,
        marginBottom: '4%',
    },
    recordScreenTitle: {
        fontSize: 36,
        fontWeight: '700',
        color: '#333',
        marginBottom: '10%',
    },
    recordActionsBar: {
        display: 'flex',
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        marginBottom: '7.5%',
    },
    audioPlayer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.davysGrey,
        justifyContent: 'space-between',
        flex: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginRight: '2.5%',
    },
    slider: {width: '70%'},
    playIcon: {},
    sendToDocButton: {
        backgroundColor: colors.pacificBlue,
        height: 50,
        width: 50,
        borderRadius: 25,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
    },
    deleteRecordingButton: {
        backgroundColor: colors.mainTheme,
        height: 40,
        width: 40,
        borderRadius: 50 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tipTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
        marginBottom: '5%',
    },
    tipsBox: {flex: 1},
    tipsScrollBox: {flex: 1},
    tipBox: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: colors.pacificBlue,
        borderRadius: 5,
        padding: 10,
        marginBottom: '3.5%',
    },
    tipIcon: {marginRight: 15},
    tipText: {color: 'white', fontSize: 16, fontWeight: '500', flex: 1},
    // SEND TO DOCTOR SCREEN
    docContainer: {
        flex: 1,
        backgroundColor: '#eee',
    },
    cardList: {flex: 1},
    cardListContainer: {paddingVertical: 30},
    card: {
        display: 'flex',
        flexDirection: 'row',
        width: '87.5%',
        height: 100,
        borderRadius: 10,
        backgroundColor: '#886fff',
        alignSelf: 'center',
        padding: 20,
    },
    cardGap: {
        height: 25,
    },
    docImage: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        alignSelf: 'center',
        backgroundColor: 'white',
        marginRight: '7.5%',
    },
    docName: {
        fontSize: 20,
        color: 'white',
    },
    modalBoxWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0, 0.3)',
    },
    // HISTORY VIEW
    interactionsContainer: {paddingVertical: 30},
    interactionCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: 120,
        width: '87.5%',
        alignSelf: 'center',
        borderRadius: 10,
        padding: 20,
        elevation: 1,
    },
    docNameRow: {},
    docNameText: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    infoRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoRowText: {
        color: 'white',
        fontSize: 14,
    },
    infoRowIcon: {
        marginRight: 7.5,
    },
    // HISTORY DETAILS VIEW
    detailsContainer: {paddingTop: 20, paddingLeft: 25},
    infoCard: {
        marginBottom: 30,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    rowTitleText: {
        color: colors.purpureus,
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    titleRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    rowIcon: {
        color: colors.mainTheme,
        marginRight: 10,
    },
    rowInfoText: {
        color: '#333',
        fontSize: 18,
    },
    analysisText: {},
    // *************************
    // ******* PROFILE *********
    // *************************
    profileContainer: {
        flex: 1,
    },
    profileScrollView: {
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 30,
        // paddingBottom: 60,
    },
    profileScrollViewContainer: {
        // alignItems: 'center',
        // paddingVertical: 50,
    },
    profileHeaderStyle: {
        backgroundColor: colors.mainTheme,
        paddingHorizontal: '5%',
        height: 57.5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
    },
    profileHeaderText: {
        color: 'white',
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    profileCard: {
        height: 200,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: colors.davysGrey,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: 'lime',
    },
    profileText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    profileInfo: {
        marginTop: '15%',
        display: 'flex',
        flexDirection: 'column',
    },
    doctorInfo: {
        marginTop: '15%',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '10%',
    },
    profileField: {
        display: 'flex',
        flexDirection: 'row',
        // alignItems: 'center',
        alignItems: 'flex-start',
        marginBottom: '5%',
    },
    profileFieldIcon: {
        marginRight: 20,
    },
    profileFieldText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        flex: 1,
        flexWrap: 'wrap',
    },
    logoutButton: {
        borderRadius: 30,
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    editButton: {
        alignContent: 'flex-end',
        position: 'absolute',
        right: 0,
    },
    // *************************
    // ***** EDIT PROFILE ******
    // *************************
    editProfContainer: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: '7.5%',
        paddingTop: '7.5%',
    },
    confirmEditButton: {
        position: 'absolute',
        bottom: '3%',
        right: '5%',
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
        backgroundColor: colors.pacificBlue,
        alignItems: 'center',
        justifyContent: 'center',
    },
    genderDrop: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
    },
    phonePicker: {
        height: '10%',
        width: '90%',
    },
    phonePickerText: {
        color: '#333',
        fontSize: 16,
    },
    // *************************
    // ***** DOCTOR HOME *******
    // *************************
    docHomeContainer: {
        flex: 1,
        // alignItems: 'center',
        // paddingHorizontal: 25,
    },
    docWelcomeText: {
        color: '#333',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: '10%',
    },
    doctorRequests: {paddingHorizontal: 25, paddingTop: 25},
    docSectionHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    docSectionText: {
        color: '#333',
        fontSize: 24,
        fontWeight: '700',
    },
    docRequestCard: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        height: 100,
        borderRadius: 10,
        alignSelf: 'center',
        padding: 20,
    },
    // *************************
    // **** DOCTOR RESPONSE ****
    // *************************
    doctorResponseContainer: {flex: 1},
    doctorResponseScroll: {
        paddingHorizontal: '5%',
        paddingVertical: '5%',
    },
    infoSection: {marginBottom: 35},
    patientInfoTextBox: {},
    patientInfoText: {
        color: '#333',
        fontSize: 18,
    },
    audioPlayerDoctor: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.davysGrey,
        justifyContent: 'space-between',
        width: '90%',
        height: 55,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    doctorSlider: {
        flex: 9,
    },
    commentArea: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    commentContent: {
        flex: 1,
        fontSize: 18,
        paddingLeft: 10,
        backgroundColor: 'white',
        marginBottom: 20,
        color: '#333',
        alignSelf: 'stretch',
        borderRadius: 10,
    },
    commentButton: {
        backgroundColor: colors.mainTheme,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        marginLeft: 15,
    },
});

export default styles;
