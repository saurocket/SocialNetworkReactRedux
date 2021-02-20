export const updateObjectInArray = (items, imtemId, objPropName, newObjPeops) => {

   return      items.map(u => {
        if (u[objPropName] === imtemId) {
            u.followed = true;
            return {...u, ... newObjPeops}
        }
        return u;
    });

}