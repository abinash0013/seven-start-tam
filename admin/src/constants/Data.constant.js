// const mainUrl = `http://localhost:8000/`
const mainUrl = `https://api.sevenstartambola.com/`
const base = {
    adminLogin: mainUrl + `adminLogin`,
    saveAgent: mainUrl + `saveAgent`,
    agentsList: mainUrl + `agentsList`,
    editAgent: mainUrl + `editAgent`,
    deleteAgent: mainUrl + `deleteAgent`,
    saveUser: mainUrl + `saveUser`,
    usersList: mainUrl + `usersList`,
    editUser: mainUrl + `editUser`,
    deleteUser: mainUrl + `deleteUser`,
    // saveTicket: mainUrl + `saveTicket`,
    // ticketList: mainUrl + `ticketList`,
    // editTicket: mainUrl + `editTicket`,
    // deleteTicket: mainUrl + `deleteTicket`,
    ticketCardView: mainUrl + `ticketCardView`,
    gameList: mainUrl + `gameList`,
    saveGame: mainUrl + `saveGame`,
    editGame: mainUrl + `editGame`,
    saveAnnouncement: mainUrl + `saveAnnouncement`,
    announcementList: mainUrl + `announcementList`,
    editAnnouncement: mainUrl + `editAnnouncement`,
    deleteAnnouncement: mainUrl + `deleteAnnouncement`,
    disclaimerList: mainUrl + `disclaimerList`,
    editDisclaimer: mainUrl + `editDisclaimer`,
};
export { base };