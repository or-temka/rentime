import { ROUTES } from '@/config/routes'
import { PRODUCT_IMAGE_ROUTE } from '@/entities/product'
import { RentButton } from '@/shared/components'
import Image from 'next/image'
import Link from 'next/link'

export const ProductStand = () => {
  return (
    <section>
      <div>
        <h2>Playstation 5</h2>
        <p>
          Мощная игровая консоль нового поколения с невероятной графикой,
          быстрой загрузкой и полным погружением в игровой процесс
        </p>
        <Link href={ROUTES.HOME}>Посмотреть детали</Link>
      </div>

      <div>
        <Image
          alt="playstation 5"
          src={`${PRODUCT_IMAGE_ROUTE.playstation5}playstation5_transparent_background.png`}
          width={882}
          height={661}
        />
      </div>

      <div>
        <Link href={ROUTES.HOME}>Посмотреть детали</Link>
        <strong>от 1100 руб</strong>
        <RentButton theme="dark" />
      </div>
    </section>
  )
}
