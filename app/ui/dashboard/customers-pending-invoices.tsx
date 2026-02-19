import Image from "next/image";

export default function CustomersPendingInvoices({ data }: { data?: any }) {
    return (
        <div className="w-full">
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                {/* Header */}
                <div className="border-b border-gray-200 px-6 py-4">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Pending Invoices
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                        Customers with outstanding invoices
                    </p>
                </div>

                {/* Content */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr className="border-b border-gray-200">
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                    Customer
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                    Invoice ID
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                    Amount
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                    Due Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((invoice) => (
                                <tr key={invoice.invoice_id} className="border-b border-gray-200 hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm text-gray-900 flex items-center">
                                        <Image
                                            src={invoice.image_url}
                                            alt={`${invoice.name}'s profile picture`}
                                            className="mr-4 rounded-full"
                                            width={32}
                                            height={32}
                                        />
                                        {invoice.name}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{invoice.invoice_id}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{invoice.amount}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{Date(invoice.date)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}