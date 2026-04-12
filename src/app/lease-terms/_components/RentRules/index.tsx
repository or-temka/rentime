'use client'

import Link from 'next/link'
import { ROUTES } from '@/config/routes'
import generalStyles from '../../rulesGeneral.module.scss'
import { UlLi } from '@/shared/components'
import { BLOCKS_IDS } from '../../constants'
import { RentRule } from '../../../../shared/components/RentRule'

export const RentRules = () => {
  return (
    <section className={generalStyles.section}>
      <RentRule title="Требования к арендатору" id={BLOCKS_IDS.tenantRequirements}>
        <ul className={generalStyles.ul}>
          <UlLi>Арендатор должен быть старше 18 лет.</UlLi>
          <UlLi>
            Обязательная проверка оригинала паспорта и наличия задолженностей.
          </UlLi>
          <UlLi>
            <span className={generalStyles.strong}>Без залога:</span>
            <span>
              Наличие паспорта гражданина РФ с действующей постоянной
              регистрацией{' '}
              <span style={{ textDecoration: 'underline' }}>
                в любом городе
              </span>
              .
            </span>
          </UlLi>
          <UlLi>
            <span className={generalStyles.strong}>С залогом:</span> Возможна
            аренда с временной регистрацией при внесении залога в размере 5000
            рублей.
          </UlLi>
          <UlLi>
            <p>
              <span className={generalStyles.strong}>Важно:</span> В случае
              наличия исполнительных производств (долгов), передача оборудования
              возможна только при 100% залоге (полная стоимость товара).
              Проверить наличие задолженностей можно самостоятельно на сайте{' '}
              <a
                href="https://fssp.gov.ru/iss/ip/"
                target="_blank"
                className={generalStyles.link}
              >
                ФССП России
              </a>
              .
            </p>
          </UlLi>
        </ul>
      </RentRule>

      <RentRule
        title="Условия доставки и самовывоза"
        id={BLOCKS_IDS.deliveryTermsAndConditions}
      >
        <ul className={generalStyles.ul}>
          <UlLi>Самовывоз и самостоятельный возврат: бесплатно</UlLi>
          <UlLi>
            <p>
              <span className={generalStyles.strong}>
                Доставка (привезти к вам):
              </span>{' '}
              Стоимость доставки можно уточнить на странице{' '}
              <Link
                href={ROUTES.PAYMENT_AND_DELIVERY.BASE}
                className={generalStyles.link}
              >
                Доставка и оплата
              </Link>
              .
            </p>
          </UlLi>
          <UlLi>
            <p>
              <span className={generalStyles.strong}>
                Доставка (забрать от вас):
              </span>{' '}
              Равняется стоимости &quot;привезти к вам&quot;. Можно уточнить на
              странице{' '}
              <Link
                href={ROUTES.PAYMENT_AND_DELIVERY.BASE}
                className={generalStyles.link}
              >
                Доставка и оплата
              </Link>
              . На месте необходимо будет проверить устройство, поэтому
              необходимо оставить его подключенным к сети.
            </p>
          </UlLi>
          <UlLi>
            <p>
              При доставке обязательно потребуется предоплата в размере 500
              рублей, ФИО и дата рождения. Сумма пойдет в стоимость заказа.
            </p>
          </UlLi>
        </ul>
      </RentRule>

      <RentRule
        title="Бронирование товара на определенное число"
        id={BLOCKS_IDS.reservation}
      >
        <ul className={generalStyles.ul}>
          <UlLi>
            Для бронирования товара необходимо внести предоплату в размере 500
            рублей, чтобы закрепить за собой слот на определенную дату/время.
            Это выступает подтверждением вашего намерения на аренду.
          </UlLi>
          <UlLi>
            <span>
              Мы не принуждаем вас бронировать.{' '}
              <span className={generalStyles.strong}>
                Вы можете не бронировать
              </span>{' '}
              и написать нам в день, в который вы бы хотели арендовать, однако
              нет гарантии, что в наличии будет свободная позиция товара.
            </span>
          </UlLi>
        </ul>
      </RentRule>
    </section>
  )
}
