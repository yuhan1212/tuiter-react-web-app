import { createSlice } from "@reduxjs/toolkit";

let initProfile =
    {
        name: 'Jose Annunziato', firstName: 'Jose', lastName: 'Annunziato', handle: '@jannunzi',
        profilePicture: 'jose.png', 	bannerPicture: 'polyglot.png',
        bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.',
        website: 'youtube.com/webdevtv',
        location: 'Boston, MA',	dateOfBirth: '7/7/1968',	dateJoined: '4/2009', bday:'1968-07-07',
        followingCount: 340,	followersCount: 223
    }


const profileSlice = createSlice({
    name: "profile",
    initialState: initProfile,
    reducers: {
        updateProfile(state, action) {
            const profile = state
            profile.name = action.payload.name
            profile.bio = action.payload.bio
            profile.location = action.payload.location
            profile.website = action.payload.website
            profile.bday = action.payload.bday

            profile.firstName = profile.name.split(' ')[0]
            profile.lastName = profile.name.split(' ')[1]

            console.log(profile.bday)
            const bYear = profile.bday.split("-")[0]
            const bMonth = profile.bday.split("-")[1]
            const bDay = profile.bday.split("-")[2]
            profile.dateOfBirth = bMonth + "/" + bDay + "/" + bYear
        }
    }
});

export const {updateProfile} = profileSlice.actions
export default profileSlice.reducer;