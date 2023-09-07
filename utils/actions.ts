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