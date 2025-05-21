import { ROUTES } from '@/config/routes'
import { RentButton, UnderlineSpan } from '@/shared/components'
import { TextsBackgound } from '@/widgets'
import Link from 'next/link'

export const Advertisement = () => {
  return (
    <section>
      <TextsBackgound />

      <div>
        <span>Арендуй. Пользуйся. Возвращай. Легко!</span>
        <div>
          <RentButton theme="dark" />
          <Link href={ROUTES.PAYMENT_AND_DELIVERY}>
            <UnderlineSpan>Оплата и доставка</UnderlineSpan>
          </Link>
        </div>
      </div>
    </section>
  )
}
