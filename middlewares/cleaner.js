
export default function deleteUsefulInfos(user) {
    delete user.userPassword
    delete user.id
    delete user.createdAt
    delete user.updatedAt
}
