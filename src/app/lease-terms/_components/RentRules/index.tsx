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
            Обязательная проверка паспортных данных и наличия задолженностей.
          </UlLi>
          <UlLi>
            С залогом: Возможна аренда с временной регистрацией при внесении
            залога в размере 5000 рублей.
          </UlLi>
          <UlLi>
            Без залога: Наличие паспорта гражданина РФ с действующей постоянной
            регистрацией в городе Ярославле.
          </UlLi>
          <UlLi>
            <p>
              Важно: В случае наличия исполнительных производств (долгов),
              передача оборудования возможна только при 100% предоплате.
              Проверить наличие задолженностей можно самостоятельно на сайте{' '}
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
              Доставка: Стоимость доставки можно уточнить на странице{' '}
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
              Возврат с доставкой: Платный. Стоимость зависит от района. Можно
              уточнить на странице{' '}
              <Link
                href={ROUTES.PAYMENT_AND_DELIVERY.BASE}
                className={styles.link}
              >
                Доставка и оплата
              </Link>
              .
            </p>
          </UlLi>
        </ul>
      </Rule>

      <Rule title="Как оформить заказ?" id={BLOCKS_IDS.howPlaceOrder}>
        <ul className={styles.ul}>
          <UlLi>Выберите подходящий товар</UlLi>
          <UlLi>
            Ознакомьтесь с условиями аренды, стоимостью, оплатой и доставкой.
          </UlLi>
          <UlLi>
            Нажмите на кнопку “Арендовать”. Вы будете перенаправлены в диалог с
            арендодателем на Авито.
          </UlLi>
          <UlLi>
            Перед бронированием:
            <ol className={styles.ol}>
              <li className={[styles.li, styles.ol__li].join(' ')}>
                Скриншот паспорта для проверки, а также чтобы заполнить договор
                заранее (можно и при встрече, однако, на месте потребуется
                намного больше времени для заполнения договора и если возникнут
                проблемы с проверкой оригинала паспорта - сделку придется
                отменить);
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
