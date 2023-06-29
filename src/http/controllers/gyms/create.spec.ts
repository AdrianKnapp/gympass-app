import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import request from 'supertest'
import { app } from '@/app'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'

describe('Create Gym (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to create a gym', async () => {
    const { token } = await createAndAuthenticateUser(app)

    const response = await request(app.server)
      .post('/gyms')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Academia',
        description: null,
        phone: null,
        latitude: -32.0666453,
        longitude: -52.1722704,
      })
    console.log('🚀 ~ file: create.spec.ts:19 ~ it ~ response:', response)

    expect(response.statusCode).toEqual(201)
  })
})
