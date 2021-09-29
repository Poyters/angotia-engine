export const createNewUser = (
  ssoId: string,
  firstName: string,
  lastName: string
) => ({
  ssoId,
  created: Date.now(),
  profile: {
    firstName,
    lastName,
    description: "",
    avatar: null,
    backgroundPicture: null,
    companyName: null,
    phone: null,
    gender: null,
    age: null,
    pet: {
      types: [],
      description: null
    },
    keywords: []
  }
});
