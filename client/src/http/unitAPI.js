import {host} from "./index"

export const creatingUnit = async (customId, hp, maxHp, mana, maxMana, armor, magResist, roleId, x, y) => {
    const response = await host.post("api/unit/create", {
        customId, hp, maxHp, mana, maxMana, armor, magResist, roleId, x, y
    })
    return response
}

export const editUnit = async (customId, hp, maxHp, mana, maxMana, armor, magResist, roleId, x, y) => {
    const response = await host.post("api/unit/edit", {
        customId, hp, maxHp, mana, maxMana, armor, magResist, roleId, x, y
    })
    console.log(response)
    return response
}

export const fetchUnits = async () => {
    const {data} = await host.get("api/unit/list")
    return data
}

export const removeUnit = async (customId) => {
    const response = await host.post("api/unit/remove", {customId})
    return response
}