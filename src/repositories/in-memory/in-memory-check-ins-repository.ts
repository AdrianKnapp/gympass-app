import { CheckIn, Prisma } from '@prisma/client'
import { randomUUID } from 'crypto'
import { CheckInsRepository } from '../check-ins-repository'

export class InMemoryCheckInsRepository implements CheckInsRepository {
  public checkIns: CheckIn[] = []

  async findByUserIdOnDate(userId: string, date: Date) {
    const checkInOnSameDate = this.checkIns.find(
      (checkIn) => checkIn.user_id === userId,
    )

    if (!checkInOnSameDate) return null

    return checkInOnSameDate
  }

  async create(data: Prisma.CheckInUncheckedCreateInput) {
    const checkIn = {
      id: randomUUID(),
      user_id: data.user_id,
      gym_id: data.gym_id,
      validated_at: data.validated_at ? new Date(data.validated_at) : null,
      created_at: new Date(),
    }

    this.checkIns.push(checkIn)

    return checkIn
  }
}
