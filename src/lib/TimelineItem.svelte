<script lang = "ts">
    // component props
    // Camel case not supported for props, see drawback section.
    export let card_title, card_desc,card_content;
</script>



<div class="w-2/5 px-2 py-10" data-aos="zoom-in-down">
    <div class="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
        <div class="text-gray-600 mb-2 flex justify-between">
            <div class="font-bold">
                {card_title}
            </div>

        </div>
        <div class="text-gray-600">
            {card_desc}
        </div>
    <div class = "text-gray-600 pt-3">
        {card_content}
    </div>

    </div>

</div>