import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import PrismaService from '@/services/PrismaService'

export const getCurrentUser = async () => {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) {
      return null
    }

    const currentUser = await PrismaService.user.findUnique({
      where: {
        email: session?.user?.email as string,
      },
    })

    if (!currentUser) {
      return null
    }

    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
    }
  } catch (error) {
    console.log(error)
  }
}
