<script lang="ts">
    let {
        url,
    }: {
        url: string
    } = $props()
</script>

<a href="https://{url}">{url}</a>

<style>
    a {
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
</style>
