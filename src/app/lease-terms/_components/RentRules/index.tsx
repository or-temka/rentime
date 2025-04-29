import Link from 'next/link'
import { Rule } from './Rule'
import { ROUTES } from '@/config/routes'
import styles from './index.module.scss'
import { UlLiProps } from './types'

const UlLi = ({ children, className, ...rest }: UlLiProps) => {
  return (
    <li {...rest} className={[styles.ul__li, className].join(' ')}>
      {children}
    </li>
  )
}

export const RentRules = () => {
  return (
    <section className={styles.section}>
      <Rule title="Требования к арендатору">
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
            Важно: В случае наличия исполнительных производств (долгов),
            передача оборудования возможна только при 100% предоплате. Проверить
            наличие задолженностей можно самостоятельно на сайте{' '}
            <a href="https://fssp.gov.ru/" target="_blank">
              ФССП России
            </a>
            .
          </UlLi>
        </ul>
      </Rule>

      <Rule title="Условия доставки и самовывоза">
        <ul className={styles.ul}>
          <UlLi>Самовывоз и самостоятельный возврат: бесплатно</UlLi>

          <UlLi>
            Доставка: Стоимость доставки можно уточнить на странице{' '}
            <Link href={ROUTES.PAYMENT_AND_DELIVERY}>Доставка и оплата</Link>.
          </UlLi>

          <UlLi>
            Возврат с доставкой: Платный. Стоимость зависит от района. Можно
            уточнить на странице{' '}
            <Link href={ROUTES.PAYMENT_AND_DELIVERY}>Доставка и оплата</Link>.
          </UlLi>
        </ul>
      </Rule>

      <Rule title="Как оформить заказ?">
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
              <li className={styles.ol__li}>
                Скриншот паспорта для проверки (можно проверить при встрече, но
                если возникнут проблемы с проверкой оригинала, сделка будет
                отменена);
              </li>
              <li className={styles.ol__li}>
                Предоплата в размере 500р только при доставке (вернётся при
                передаче товара). Эта сумма возвращается при передаче товара и
                служит гарантией вашего присутствия на сделке.
              </li>
            </ol>
          </UlLi>

          <UlLi>
            На месте передачи:
            <ol className={styles.ol}>
              <li className={styles.ol__li}>Проверка оригинала паспорта;</li>
              <li className={styles.ol__li}>Подписание договора аренды.</li>
            </ol>
          </UlLi>
        </ul>
      </Rule>
    </section>
  )
}
