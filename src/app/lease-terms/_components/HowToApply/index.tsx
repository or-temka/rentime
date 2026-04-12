'use client'

import Link from 'next/link'
import { ROUTES } from '@/config/routes'
import generalStyles from '../../rulesGeneral.module.scss'
import { UlLi } from '@/shared/components'
import { BLOCKS_IDS } from '../../constants'
import { RentRule } from '../../../../shared/components/RentRule'

export const HowToApply = () => {
  return (
    <section className={generalStyles.section} style={{ marginTop: 100 }}>
      <RentRule title="Как оформить заказ?" id={BLOCKS_IDS.howPlaceOrder}>
        <ul className={generalStyles.ul}>
          <UlLi>
            <span>
              Выберите подходящий товар в{' '}
              <Link href={ROUTES.PRODUCTS.BASE} className={generalStyles.link}>
                каталоге
              </Link>
            </span>
          </UlLi>
          <UlLi>
            <span>
              Ознакомьтесь с{' '}
              <Link
                href={
                  ROUTES.LEASE_TERMS.BASE + `#${BLOCKS_IDS.tenantRequirements}`
                }
                className={generalStyles.link}
              >
                условиями аренды
              </Link>
              , стоимостью товара,{' '}
              <Link
                href={ROUTES.PAYMENT_AND_DELIVERY.BASE}
                className={generalStyles.link}
              >
                оплатой и доставкой
              </Link>
              .
            </span>
          </UlLi>
          <UlLi>
            Нажмите на кнопку “Арендовать” на страницы товара. Вы будете
            перенаправлены в диалог с арендодателем на Авито.
          </UlLi>
          <UlLi>
            Перед бронированием необязательно:
            <ol className={generalStyles.ol}>
              <li
                className={[generalStyles.li, generalStyles.ol__li].join(' ')}
              >
                ФИО и дата рождения для проверки на задолженностей;
              </li>
              <li
                className={[generalStyles.li, generalStyles.ol__li].join(' ')}
              >
                Предоплата в размере 500р только при доставке (вернётся при
                передаче товара). Эта сумма возвращается при передаче товара и
                служит гарантией вашего присутствия на сделке.
              </li>
            </ol>
          </UlLi>
          <UlLi>
            На месте передачи:
            <ol className={generalStyles.ol}>
              <li
                className={[generalStyles.li, generalStyles.ol__li].join(' ')}
              >
                Проверка оригинала паспорта;
              </li>
              <li
                className={[generalStyles.li, generalStyles.ol__li].join(' ')}
              >
                Подписание договора аренды.
              </li>
            </ol>
          </UlLi>
        </ul>
      </RentRule>
    </section>
  )
}
