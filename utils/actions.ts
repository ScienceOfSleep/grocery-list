'use server'
import { revalidatePath } from 'next/cache'
import db from './db'

// CRUD Actions

// Create
export const newListItem = async (formData: FormData) => {
  const content = formData.get('content');

  if (typeof content !== 'string') {
      throw new Error('Content is not a string');
  }

  const listItem = await db.listItem.create({
      data: {
          content: content,
      },
  });

  revalidatePath('/');
}

// Update
export const checkItem = async (id: string) => {
    await db.listItem.update({
        where: { id },
        data: {
            checked: true
        }
    })

    revalidatePath('/')
}

// Delete 1
export const deleteItem = async (id: string) => {
    await db.listItem.delete({
        where: { id }
    })

    revalidatePath('/')
}

// Delete all
export const deleteAll = async ({}) => {
    await db.listItem.deleteMany({})

    revalidatePath('/')
}