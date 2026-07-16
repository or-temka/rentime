'use client'

import Link from 'next/link'
import { ROUTES } from '@/config/routes'
import generalStyles from '../../rulesGeneral.module.scss'
import { Li } from '@/shared/components'
import { BLOCKS_IDS } from '../../constants'
import { RentRule } from '../../../../shared/components/RentRule'

export const RentRules = () => {
  return (
    <section className={generalStyles.section}>
      <RentRule
        title="Требования к арендатору"
        id={BLOCKS_IDS.tenantRequirements}
      >
        <ul className={generalStyles.ul}>
          <Li>Арендатор должен быть старше 18 лет.</Li>
          <Li>
            Обязательная проверка оригинала паспорта и наличия задолженностей.
          </Li>
          <Li>
            <span className={generalStyles.strong}>Без залога:</span>
            <span>
              Наличие паспорта гражданина РФ с действующей постоянной
              регистрацией{' '}
              <span style={{ textDecoration: 'underline' }}>
                в любом городе
              </span>
              .
            </span>
          </Li>
          <Li>
            <span className={generalStyles.strong}>С залогом:</span> Возможна
            аренда с временной регистрацией при внесении залога в размере 5000
            рублей.
          </Li>
          <Li>
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
          </Li>
        </ul>
      </RentRule>

      <RentRule
        title="Условия доставки и самовывоза"
        id={BLOCKS_IDS.deliveryTermsAndConditions}
      >
        <ul className={generalStyles.ul}>
          <Li>Самовывоз и самостоятельный возврат: бесплатно</Li>
          <Li>
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
          </Li>
          <Li>
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
          </Li>
          <Li>
            <p>
              При доставке обязательно потребуется предоплата в размере 500
              рублей, ФИО и дата рождения. Сумма пойдет в стоимость заказа.
            </p>
          </Li>
        </ul>
      </RentRule>

      <RentRule
        title="Бронирование товара на определенное число"
        id={BLOCKS_IDS.reservation}
      >
        <ul className={generalStyles.ul}>
          <Li>
            Для бронирования товара необходимо внести предоплату в размере 500
            рублей, чтобы закрепить за собой слот на определенную дату/время.
            Это выступает подтверждением вашего намерения на аренду.
          </Li>
          <Li>
            <span>
              Мы не принуждаем вас бронировать.{' '}
              <span className={generalStyles.strong}>
                Вы можете не бронировать
              </span>{' '}
              и написать нам в день, в который вы бы хотели арендовать, однако
              нет гарантии, что в наличии будет свободная позиция товара.
            </span>
          </Li>
        </ul>
      </RentRule>
    </section>
  )
}
