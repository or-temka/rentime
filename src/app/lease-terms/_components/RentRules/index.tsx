'use client'

import Link from 'next/link'
import { Rule } from './Rule'
import { ROUTES } from '@/config/routes'
import styles from './index.module.scss'
import { UlLi } from '@/shared/components'
import { BLOCKS_IDS } from '../../constants'

export const RentRules = () => {
  return (
    <section className={styles.section}>
      <Rule title="Требования к арендатору" id={BLOCKS_IDS.tenantRequirements}>
        <ul className={styles.ul}>
          <UlLi>Арендатор должен быть старше 18 лет.</UlLi>
          <UlLi>
            Обязательная проверка оригинала паспорта и наличия задолженностей.
          </UlLi>
          <UlLi>
            <span className={styles.strong}>Без залога:</span> Наличие паспорта
            гражданина РФ с действующей постоянной регистрацией в любом городе.
          </UlLi>
          <UlLi>
            <span className={styles.strong}>С залогом:</span> Возможна аренда с
            временной регистрацией при внесении залога в размере 5000 рублей.
          </UlLi>
          <UlLi>
            <p>
              <span className={styles.strong}>Важно:</span> В случае наличия
              исполнительных производств (долгов),
              передача оборудования возможна только при 100% залоге (полная
              стоимость товара).
              При наличие небольших или старых задолженностей мы можем
              рассмотреть возможность сдачи оборудования без залога.
              Проверить наличие задолженностей можно
              самостоятельно на сайте{' '}
              <a
                href="https://fssp.gov.ru/"
                target="_blank"
                className={styles.link}
              >
                ФССП России
              </a>
              .
            </p>
          </UlLi>
        </ul>
      </Rule>

      <Rule
        title="Условия доставки и самовывоза"
        id={BLOCKS_IDS.deliveryTermsAndConditions}
      >
        <ul className={styles.ul}>
          <UlLi>Самовывоз и самостоятельный возврат: бесплатно</UlLi>
          <UlLi>
            <p>
              <span className={styles.strong}>Доставка (привезти к вам):</span>{' '}
              Стоимость доставки можно уточнить на странице{' '}
              <Link
                href={ROUTES.PAYMENT_AND_DELIVERY.BASE}
                className={styles.link}
              >
                Доставка и оплата
              </Link>
              .
            </p>
          </UlLi>
          <UlLi>
            <p>
              <span className={styles.strong}>Доставка (забрать от вас):</span>{' '}
              Равняется стоимости &quot;привезти к вам&quot;. Можно уточнить на
              странице{' '}
              <Link
                href={ROUTES.PAYMENT_AND_DELIVERY.BASE}
                className={styles.link}
              >
                Доставка и оплата
              </Link>
              . На месте необходимо будет проверить устройство, поэтому необходимо оставить его подключенным к сети.
            </p>
          </UlLi>
          <UlLi>
            <p>
              При доставке обязательно потребуется предоплата в размере 500
              рублей, ФИО и дата рождения. Сумма пойдет в стоимость заказа.
            </p>
          </UlLi>
        </ul>
      </Rule>

      <Rule
        title="Бронирование товара на определенное число"
        id={BLOCKS_IDS.reservation}
      >
        <ul className={styles.ul}>
          <UlLi>
            Для бронирования товара необходимо внести предоплату в размере 500
            рублей, чтобы закрепить за собой слот на определенную дату/время.
            Это выступает подтверждением вашего намерения на аренду.
          </UlLi>
          <UlLi>
            <span>
              Мы не принуждаем вас бронировать.{' '}
              <span className={styles.strong}>Вы можете не бронировать</span> и
              написать нам в день, в который вы бы хотели арендовать, однако нет
              гарантии, что в наличии будет свободная позиция товара.
            </span>
          </UlLi>
        </ul>
      </Rule>

      <Rule title="Как оформить заказ?" id={BLOCKS_IDS.howPlaceOrder}>
        <ul className={styles.ul}>
          <UlLi>
            <span>
              Выберите подходящий товар в{' '}
              <Link href={ROUTES.PRODUCTS.BASE} className={styles.link}>
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
                className={styles.link}
              >
                условиями аренды
              </Link>
              , стоимостью товара,{' '}
              <Link
                href={ROUTES.PAYMENT_AND_DELIVERY.BASE}
                className={styles.link}
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
            <ol className={styles.ol}>
              <li className={[styles.li, styles.ol__li].join(' ')}>
                ФИО и дата рождения для проверки на задолженностей;
              </li>
              <li className={[styles.li, styles.ol__li].join(' ')}>
                Предоплата в размере 500р только при доставке (вернётся при
                передаче товара). Эта сумма возвращается при передаче товара и
                служит гарантией вашего присутствия на сделке.
              </li>
            </ol>
          </UlLi>
          <UlLi>
            На месте передачи:
            <ol className={styles.ol}>
              <li className={[styles.li, styles.ol__li].join(' ')}>
                Проверка оригинала паспорта;
              </li>
              <li className={[styles.li, styles.ol__li].join(' ')}>
                Подписание договора аренды.
              </li>
            </ol>
          </UlLi>
        </ul>
      </Rule>
    </section>
  )
}
