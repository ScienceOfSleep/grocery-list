'use server'
import { revalidatePath } from 'next/cache'
import db from './db'

export const newListItem = async (formData) => {
    const listItem = await db.listItem.create({
        data: {
            content: formData.get('content'),
        },
    })

    revalidatePath('/')
}

export const checkItem = async (id) => {
    await db.listItem.update({
        where: { id },
        data: {
            checked: true
        }
    })

    revalidatePath('/')
}