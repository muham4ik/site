"use client"

import { Button } from "@/components/ui/button"

import { useScopedI18n } from "@/shared/locales/client"
import { useMe } from "@/shared/services/auth/use-me"
import { $modals } from "@/shared/store"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function PurchaseButton() {
  const { data: me } = useMe()

  const isSubscriber = Boolean(me && me.subscriptionType !== null)

  const t = useScopedI18n("pricing")
  const router = useRouter()

  return (
    <Button variant="default" className="w-full" asChild>
      <Link href="https://t.me/frkn_support" target="_blank">
        {t("pro.button")}
      </Link>
    </Button>
  )

  // biome-ignore lint/correctness/noUnreachable: <explanation>
  return (
    <Button
      variant="default"
      className="w-full"
      disabled={isSubscriber}
      onClick={() => {
        if (!me) {
          router.push("/registration")
        } else {
          $modals.setKey("paymentProvider", {
            open: true,
          })
        }
      }}
    >
      {isSubscriber ? "Active" : t("pro.button")}
    </Button>
  )
}
